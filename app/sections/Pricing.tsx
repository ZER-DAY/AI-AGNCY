import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "./SectionContent";
import { Button, ButtonProps } from "@/components/Button";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export const pricingTiers = [
  {
    title: "الذكاء الاصطناعي AI",
    description: "تخصيص الذكاء الاصطناعي لدعم صناع المحتوى على TikTok",
    price: "Free",
    buttonText: "ذكاء اصطناعي لتميّز بثك على TikTok",
    buttonVariant: "primary",
    features: [
      "تحليل أداء البث المباشر باستخدام تقنيات الذكاء الاصطناعي",
      "أدوات ذكية لتحسين التفاعل مع الجمهور على TikTok",
      "اقتراحات مخصصة لتعزيز جودة البث المباشر",
    ],
    color: "amber",
    className: "lg:py-12 lg:my-6",
  },
  {
    title: "تصميم المحتوى Tiktok",
    description:
      "دورات تدريبية مكثفة: من الفكرة الإبداعية إلى الإخراج الاحترافي في صناعة الفيديو",
    price: "Free",
    buttonText: "إبداع بصري يعكس هويتك",
    buttonVariant: "primary",
    features: [
      "تحويل أفكارك إلى محتوى مرئي محترف",
      "تعلم أساسيات صناعة الفيديو بأسلوب إبداعي",
      "دورات شاملة لصناعة فيديوهات احترافية",
      "من الفكرة إلى الإخراج: دورة متكاملة لصناع الفيديو",
    ],
    color: "violet",
    className: "lg:py-18 lg:my-0",
  },
  {
    title: "خدمات الاستشارة والتطوير Tiktok",
    description:
      "دورات تدريبية مخصصة: تطوير تواجدكم الرقمي بتبسيط المهام وتنظيمها",
    price: "Free",
    buttonText: "استشارات مبتكرة لتطوير رؤيتك الرقمية",
    buttonVariant: "primary",
    features: [
      "استجابة فورية لحل المعيقات وتقديم الاستشارات المهنية",
      "عزيز التعاون بين الشركات التجارية والمبدعين لتحقيق الفائدة المشتركة",
      "استكشاف نمط البث المثالي ليتناسب مع شخصيتك وتطلعاتك",
      "تسليط الضوء على مهاراتك وإبداعاتك من خلال البث الفعّال",
      "تحليل البث المباشر: فهم الأداء وتعزيز التأثير",
    ],
    color: "teal",
    className: "lg:py-12 lg:my-6",
  },
] satisfies {
  title: string;
  description: string;
  price: string | number | null;
  buttonText: string;
  buttonVariant?: ButtonProps["variant"];
  features: string[];
  color: string;
  className?: string;
}[];

export const Pricing = () => {
  return (
    <section id="pricing" dir="rtl">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold text-center text-gray-200">
              أكتشف خدماتنا المميزة 🔥
            </h2>
            <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-start">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.title}
                  className={twMerge(
                    "border border-[var(--color-border)] rounded-3xl px-6 py-12 max-w-sm mx-auto flex-1",
                    tier.className
                  )}
                >
                  <h3
                    className={twMerge(
                      `font-semibold text-4xl`,
                      tier.color === "violet" && "text-violet-400",
                      tier.color === "amber" && "text-amber-300",
                      tier.color === "teal" && "text-teal-300"
                    )}
                  >
                    {tier.title}
                  </h3>
                  <p className="mt-4 text-gray-400">{tier.description}</p>
                  <div className="mt-8">
                    {typeof tier.price === "number" && (
                      <span className="text-2xl font-semibold text-gray-200 align-top">
                        $
                      </span>
                    )}
                    <span className="text-7xl font-semibold text-gray-200">
                      {tier.price ? tier.price : <>&nbsp;</>}
                    </span>
                  </div>
                  <Button className="mt-8" variant={tier.buttonVariant} block>
                    {tier.buttonText}
                  </Button>
                  <ul className="flex flex-col gap-4 mt-4">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="border-t border-[var(--color-border)] pt-4 flex gap-4"
                      >
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="size-6 text-violet-400 flex-shrink-0"
                        />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Pricing;
