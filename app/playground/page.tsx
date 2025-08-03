"use client"

import { useChat } from "ai/react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Background } from "@/components/background"
import { useState, useEffect } from "react"
import { Footer } from "@/components/footer"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Preloader } from "@/components/preloader"
import { Settings, BarChart2, Search, Lock, Loader2, ShoppingBag, Link, Bot, User, RefreshCw } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { updateShopifyIndexJson } from "@/actions/update-shopify"
import { getShopifyStoreInfo } from "@/actions/shopify"

declare module "ai/react" {
  interface Message {
    content: string
    role: "user" | "assistant"
  }
}

interface QuestionnaireData {
  idealClient: string
  clientGoal: string
  clientAvoid: string
  timeToAchieve: string
  benefits: string
  previousAttempts: string
  productService: string
  background: string
  includes: string
}

const TOTAL_QUESTIONS = 9

export default function PlaygroundPage() {
  const { messages, append, isLoading } = useChat({
    api: "/api/chat",
    initialMessages: [],
    onResponse: (response) => {
      if (response.status === 200) {
        setIsGenerating(false)
      }
    },
  })

  const router = useRouter()
  const [userData, setUserData] = useState<{ email: string; plan: string } | null>(null)
  const [welcomeMessage, setWelcomeMessage] = useState<string>("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState<QuestionnaireData>({
    idealClient: "",
    clientGoal: "",
    clientAvoid: "",
    timeToAchieve: "",
    benefits: "",
    previousAttempts: "",
    productService: "",
    background: "",
    includes: "",
  })
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [shopifyDomain, setShopifyDomain] = useState<string | null>(null)
  const { toast } = useToast()
  const progress = ((currentQuestion + 1) / TOTAL_QUESTIONS) * 100

  useEffect(() => {
    const storedUser = localStorage.getItem("userData")
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUserData(parsedUser)
      setWelcomeMessage(
        `Здравей, ${parsedUser.email}, използваш ${parsedUser.plan} план. Избери какво искаш да направя.`,
      )

      // Fetch Shopify store info
      getShopifyStoreInfo(parsedUser.email).then((result) => {
        if (result.success) {
          setShopifyDomain(result.shopifyDomain)
        }
      })
    }
  }, [])

  const isFeatureLocked = (feature: string) => {
    if (feature === "funnel") return false
    if (feature === "ads") return userData?.plan === "free"
    if (feature === "search") return userData?.plan === "free"
    if (feature === "competition") return userData?.plan === "free" || userData?.plan === "pro"
    return true
  }

  const handleCardClick = (feature: string) => {
    if (!isFeatureLocked(feature)) {
      if (feature === "funnel") {
        setCurrentQuestion(0)
        setIsModalOpen(true)
      } else {
        console.log(`Clicked ${feature}`)
      }
    } else {
      router.push("/account")
    }
  }

  const handleInputChange = (field: keyof QuestionnaireData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const areAllQuestionsAnswered = () => {
    return Object.values(formData).every((value) => value.trim() !== "")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)
    setIsGenerating(true)

    try {
      const prompt = `Create a sales funnel with the following structure:

<div class="funnel-section headline">
<h2>Headline</h2>
<p>Subheadline</p>
</div>

<div class="funnel-section benefits">
<h3>First Unique Benefit Headline</h3>
<p>Benefit text</p>
<h3>Second Unique Benefit Headline</h3>
<p>Benefit text</p>
<h3>Third Unique Benefit Headline</h3>
<p>Benefit text</p>
</div>

<div class="funnel-section story">
<h2>Story Headline</h2>
<p>Story text</p>
</div>

<div class="funnel-section offer">
<h2>Offer Headline</h2>
<p>Offer text</p>
</div>

Use the following information to create the content:
- Ideal client: ${formData.idealClient}
- Their goal: ${formData.clientGoal}
- What they want to avoid: ${formData.clientAvoid}
- Timeframe: ${formData.timeToAchieve}
- Benefits: ${formData.benefits}
- Previous attempts: ${formData.previousAttempts}
- Product/Service: ${formData.productService}
- Background: ${formData.background}
- Includes: ${formData.includes}

Please ensure that the response is complete and includes all sections of the sales funnel.`

      await append({
        role: "user",
        content: prompt,
      })
    } finally {
      setIsSubmitting(false)
      setIsModalOpen(false)
      setCurrentQuestion(0)
    }
  }

  const questions = [
    {
      id: "idealClient",
      label: "Кой е вашият идеален клиент?",
      placeholder: "Пример: Моят идеален клиент е жена между 40-50 години, която преживява менопауза.",
    },
    {
      id: "clientGoal",
      label: "Какво иска да постигне вашият клиент?",
      placeholder: "Пример: Клиентът иска да елиминира симптомите на менопаузата и да свали излишното тегло.",
    },
    {
      id: "clientAvoid",
      label: "Какво клиентът не иска да прави, за да постигне целта си?",
      placeholder:
        "Пример: Клиентът не иска да следва строги диети, да тренира, да приема хапчета или да посещава лекари.",
    },
    {
      id: "timeToAchieve",
      label: "Колко време ще отнеме на клиента да постигне мечтата си, използвайки вашия продукт/услуга?",
      placeholder: "Пример: Клиентът ще започне да вижда резултати за по-малко от 2 седмици.",
    },
    {
      id: "benefits",
      label: "Какви ползи ще получи клиентът след покупката?",
      placeholder: "Пример: Те ще елиминират симптомите на менопаузата и ще свалят до 5 кг само за 2 седмици.",
    },
    {
      id: "previousAttempts",
      label: "Какво е опитвал клиентът досега, за да постигне целта си, но не е проработило?",
      placeholder: "Пример: Те са опитвали да приемат хапчета, да посещават лекари и да следват диети.",
    },
    {
      id: "productService",
      label: "Какъв е вашият продукт/услуга?",
      placeholder:
        "Пример: Книга, която обяснява как да решите проблемите си естествено с помощта на храната, която ядете.",
    },
    {
      id: "background",
      label: "Какво трябва да знаем за вас и защо създадохте този продукт/услуга?",
      placeholder: "Пример: Преди година аз...",
    },
    {
      id: "includes",
      label: "Какво включва вашият продукт/услуга?",
      placeholder: "Пример: Книга + 3 PDF наръчника със 100 рецепти, които можете да приготвите вкъщи.",
    },
  ]

  useEffect(() => {
    if (!isGenerating && messages.length > 0) {
      const lastMessage = messages[messages.length - 1]
      if (lastMessage.role === "assistant") {
      }
    }
  }, [isGenerating, messages])

  return (
    <div className="min-h-screen bg-transparent text-white overflow-hidden select-none">
      <Preloader />
      <Background />
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <div className="border-b border-gray-500 backdrop-blur-xl">
            <div className="flex items-center justify-between p-4 max-w-7xl mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2"
              >
                <span className="text-xl font-semibold flex items-center gap-1">
                  <span className="bg-white text-black px-2">kreatify</span>
                  <span>.app</span>
                </span>
                {userData?.plan && (
                  <span
                    className={`text-sm px-2 py-1 rounded-lg ${
                      userData.plan === "pro"
                        ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200"
                        : userData.plan === "premium"
                          ? "bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-200"
                          : "bg-gradient-to-r from-gray-500/20 to-slate-500/20 text-gray-200"
                    }`}
                  >
                    {userData.plan.charAt(0).toUpperCase() + userData.plan.slice(1)} plan
                  </span>
                )}
              </motion.div>
              <Button
                variant="ghost"
                className="border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-700"
                onClick={() => router.push("/account")}
              >
                <Settings className="w-4 h-4 mr-2" />
                Настройки на акаунта
              </Button>
            </div>
          </div>

          {/* Chat Container */}
          <div className="flex-1 overflow-hidden flex flex-col max-w-7xl mx-auto w-full p-4 gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <Card
                role="button"
                tabIndex={0}
                onClick={() => handleCardClick("funnel")}
                className="bg-transparent backdrop-blur-sm border-gray-500 hover:border-white transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                <CardContent className="p-4">
                  <BarChart2 className="w-6 h-6 mb-2 text-white" />
                  <h3 className="font-semibold text-lg mb-2 text-white">Създайте продажбена фуния</h3>
                  <p className="text-sm text-gray-400">
                    Генерирайте цялостна стратегия за продажбена фуния за вашия бизнес
                  </p>
                </CardContent>
              </Card>
              <Card
                role="button"
                tabIndex={isFeatureLocked("ads") ? -1 : 0}
                onClick={() => handleCardClick("ads")}
                className={`bg-transparent backdrop-blur-sm border-gray-500 transition-all duration-300 ${
                  !isFeatureLocked("ads")
                    ? "hover:border-white cursor-pointer transform hover:scale-105"
                    : "opacity-75 cursor-not-allowed"
                }`}
              >
                <CardContent className="p-4 relative">
                  {isFeatureLocked("ads") && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                      <div className="flex items-center gap-2 text-white">
                        <Lock className="w-4 h-4" />
                        <span>Надградете плана си, за да използвате</span>
                      </div>
                    </div>
                  )}
                  <BarChart2 className="w-6 h-6 mb-2 text-white" />
                  <h3 className="font-semibold text-lg mb-2 text-white">Анализирайте Facebook реклами</h3>
                  <p className="text-sm text-gray-400">
                    Получете прозрения и съвети за оптимизация на вашите Facebook рекламни кампании
                  </p>
                </CardContent>
              </Card>
              <Card
                role="button"
                tabIndex={isFeatureLocked("competition") ? -1 : 0}
                onClick={() => handleCardClick("competition")}
                className={`bg-transparent backdrop-blur-sm border-gray-500 transition-all duration-300 ${
                  !isFeatureLocked("competition")
                    ? "hover:border-white cursor-pointer transform hover:scale-105"
                    : "opacity-75 cursor-not-allowed"
                }`}
              >
                <CardContent className="p-4 relative">
                  {isFeatureLocked("competition") && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                      <div className="flex items-center gap-2 text-white">
                        <Lock className="w-4 h-4" />
                        <span>Надградете плана си, за да използвате</span>
                      </div>
                    </div>
                  )}
                  <Search className="w-6 h-6 mb-2 text-white" />
                  <h3 className="font-semibold text-lg mb-2 text-white">Получете информация за конкуренцията</h3>
                  <p className="text-sm text-gray-400">
                    Анализирайте конкурентите си и идентифицирайте пазарни възможности
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-2 mb-6 relative">
              <label htmlFor="search-queries" className="text-lg font-medium text-white">
                Търсете в нашите заявки и открийте нови подсказки
              </label>
              <div className="relative">
                <Input
                  id="search-queries"
                  type="search"
                  placeholder="Търсене на подсказки..."
                  className="bg-transparent border-gray-500 text-white placeholder:text-gray-400"
                  disabled={isFeatureLocked("search")}
                />
                {isFeatureLocked("search") && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-md">
                    <div className="flex items-center gap-2 text-white">
                      <Lock className="w-4 h-4" />
                      <span>Надградете плана си, за да използвате</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Chat Messages Display */}
            <h2 className="text-xl font-semibold text-white mb-4">Вашите сесийни подсказки</h2>
            <div className="flex-1 overflow-y-auto space-y-4 min-h-[400px] border border-gray-500 rounded-lg p-4">
              {welcomeMessage && (
                <Card className="bg-transparent backdrop-blur-sm border-gray-500">
                  <CardContent className="p-4 flex gap-3">
                    <div className="flex flex-col items-start gap-1 w-full">
                      <span className="text-xs text-gray-400">kreatify.app</span>
                      <div className="flex gap-3 w-full">
                        <Bot className="w-6 h-6 mt-1 flex-shrink-0 text-white" />
                        <div className="flex-1 space-y-2">
                          <div className="text-sm text-gray-200">{welcomeMessage}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
              {isGenerating && (
                <Card className="bg-transparent backdrop-blur-sm border-gray-500">
                  <CardContent className="p-4 flex gap-3">
                    <div className="flex flex-col items-start gap-1 w-full">
                      <span className="text-xs text-gray-400">kreatify.app</span>
                      <div className="flex gap-3 w-full">
                        <Bot className="w-6 h-6 mt-1 flex-shrink-0 text-white" />
                        <div className="flex items-center gap-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span className="text-sm text-gray-400">Генериране на вашата продажбена фуния...</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
              {messages
                .filter((message) => message.role === "assistant")
                .map((message) => {
                  return (
                    <Card key={message.id} className="bg-transparent backdrop-blur-sm border-gray-500">
                      <CardContent className="p-4 flex gap-3">
                        <div className="flex flex-col items-start gap-1 w-full">
                          <span className="text-xs text-gray-400">
                            {message.role === "user" ? `You (${userData?.email || "loading..."})` : "kreatify.app"}
                          </span>
                          <div className="flex gap-3 w-full">
                            {message.role === "user" ? (
                              <User className="w-6 h-6 mt-1 flex-shrink-0" />
                            ) : (
                              <Bot className="w-6 h-6 mt-1 flex-shrink-0 text-white" />
                            )}
                            <div className="flex-1 space-y-2">
                              <div
                                className="text-sm text-gray-200 [&_.funnel-section]:mb-8 
                                [&_.headline]:text-center [&_.headline_h2]:text-2xl [&_.headline_p]:text-lg [&_.headline]:mb-12
                                [&_.benefits_ul]:list-disc [&_.benefits_ul]:pl-4 [&_.benefits_li]:mb-2
                                [&_.story_p]:text-gray-300 [&_.story_strong]:text-white [&_.story_strong]:font-semibold
                                [&_.offer]:text-center [&_.offer_h3]:text-xl [&_.offer_p]:max-w-2xl [&_.offer_p]:mx-auto
                                "
                                dangerouslySetInnerHTML={{ __html: message.content }}
                              />
                              <div className="mt-4 flex justify-end gap-2">
                                <Button
                                  onClick={() => {
                                    setIsGenerating(true)
                                    append({
                                      role: "user",
                                      content: "Моля, регенерирайте съдържанието на продажбената фуния.",
                                    })
                                  }}
                                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                  disabled={isGenerating}
                                  title={isGenerating ? "Content is being generated" : "Regenerate content"}
                                >
                                  <RefreshCw className="mr-2 h-4 w-4" />
                                  Регенериране
                                </Button>
                                {shopifyDomain ? (
                                  <Button
                                    onClick={async () => {
                                      if (!userData?.email) {
                                        toast({
                                          title: "Error",
                                          description: "User email not found. Please log in again.",
                                          variant: "destructive",
                                        })
                                        return
                                      }

                                      try {
                                        const result = await updateShopifyIndexJson(userData.email, message.content)

                                        if (result.success) {
                                          toast({
                                            title: "Success",
                                            description: "Successfully imported to Shopify store",
                                          })
                                        } else {
                                          throw new Error(result.message || "Unknown error occurred")
                                        }
                                      } catch (error) {
                                        console.error("Error updating Shopify store:", error)
                                        toast({
                                          title: "Error",
                                          description:
                                            error instanceof Error ? error.message : "Failed to update Shopify store",
                                          variant: "destructive",
                                        })
                                      }
                                    }}
                                    className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={isGenerating || !shopifyDomain}
                                    title={
                                      isGenerating
                                        ? "Please wait for the content to finish generating"
                                        : !shopifyDomain
                                          ? "Please connect your Shopify store first"
                                          : "Import to my Shopify store"
                                    }
                                  >
                                    <ShoppingBag className="mr-2 h-4 w-4" />
                                    Импортиране в моя Shopify магазин
                                  </Button>
                                ) : (
                                  <Button
                                    onClick={() => router.push("/account")}
                                    className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-700"
                                    disabled={isGenerating}
                                    title={
                                      isGenerating
                                        ? "Please wait for the content to finish generating"
                                        : "Connect your Shopify store to import your funnel"
                                    }
                                  >
                                    <Link className="mr-2 h-4 w-4" />
                                    Свържете вашия Shopify магазин, за да импортирате фунията си
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
            </div>
          </div>

          {/* Question Modal */}
          <Dialog
            open={isModalOpen}
            onOpenChange={(open) => {
              setIsModalOpen(open)
              if (!open) setCurrentQuestion(0)
            }}
          >
            <DialogContent className="bg-black/90 border-gray-500 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Създайте продажбена фуния</DialogTitle>
                <DialogDescription className="text-gray-400">
                  Моля, отговорете на следните въпроси, за да генерирате стратегията за вашата продажбена фуния.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <div className="mb-6">
                  <Progress value={progress} className="h-2 [&>div]:bg-white bg-gray-500" />
                  <p className="text-sm text-gray-400 mt-2">
                    Въпрос {currentQuestion + 1} от {TOTAL_QUESTIONS}
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor={questions[currentQuestion].id}>{questions[currentQuestion].label}</Label>
                      <Textarea
                        id={questions[currentQuestion].id}
                        placeholder={questions[currentQuestion].placeholder}
                        value={formData[questions[currentQuestion].id as keyof QuestionnaireData]}
                        onChange={(e) =>
                          handleInputChange(questions[currentQuestion].id as keyof QuestionnaireData, e.target.value)
                        }
                        className="mt-2 bg-transparent border-gray-500 text-white placeholder:text-gray-500"
                      />
                    </div>
                  </div>
                  <DialogFooter className="flex justify-between">
                    <div>
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => currentQuestion > 0 && setCurrentQuestion((prev) => prev - 1)}
                        disabled={currentQuestion === 0}
                        className="border-2 border-gray-500 hover:bg-gray-500/20 transition-all duration-700"
                      >
                        Предишен
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => setIsModalOpen(false)}
                        className="border-2 border-gray-500 hover:bg-gray-500/20 transition-all duration-700"
                      >
                        Отказ
                      </Button>
                      {currentQuestion < TOTAL_QUESTIONS - 1 ? (
                        <Button
                          type="button"
                          onClick={() => setCurrentQuestion((prev) => prev + 1)}
                          className="border-2 border-white bg-white text-black hover:bg-transparent hover:text-white transition-all duration-700"
                        >
                          Следващ
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          disabled={isSubmitting || !areAllQuestionsAnswered()}
                          className="border-2 border-white bg-white text-black hover:bg-transparent hover:text-white transition-all duration-700"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Създаване...
                            </>
                          ) : (
                            "Създайте фунията"
                          )}
                        </Button>
                      )}
                    </div>
                  </DialogFooter>
                </form>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <Footer />
      </div>
    </div>
  )
}
