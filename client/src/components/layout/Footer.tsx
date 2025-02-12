import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Company
            </h3>
            <p className="text-sm text-muted-foreground">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {["Features", "Pricing", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`}>
                    <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {["Documentation", "Blog", "Support"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`}>
                    <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {["Privacy", "Terms", "License"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`}>
                    <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
