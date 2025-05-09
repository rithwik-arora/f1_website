import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { ThemeContext } from "./lib/theme";
import { useState } from "react";
import { Toaster } from "./components/ui/toaster";
import { Nav } from "./components/layout/nav";
import NotFound from "./components/pages/not-found";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Gallery from "./components/pages/gallery";
import Contact from "./components/pages/contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={theme}>
          <Nav />
          <Router />
          <Toaster />
        </div>
      </ThemeContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
