import { Code2, Smartphone, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Modern Development",
    description:
      "Build with the latest technologies and best practices in web development.",
    icon: Code2,
  },
  {
    title: "Responsive Design",
    description:
      "Create beautiful applications that work seamlessly across all devices.",
    icon: Smartphone,
  },
  {
    title: "Lightning Fast",
    description:
      "Optimized performance ensures your applications load quickly and run smoothly.",
    icon: Zap,
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Everything you need to build modern web applications, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-2">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
