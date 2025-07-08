import { Moon, Sun, Laptop } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <ToggleGroup
            type="single"
            value={theme}
            onValueChange={(value) => {
                if (value) setTheme(value as "light" | "dark" | "system");
            }}
            className="bg-muted p-1 rounded-lg"
        >
            <ToggleGroupItem
                value="light"
                aria-label="Toggle light mode"
                className="p-2 data-[state=on]:bg-yellow-300 data-[state=on]:text-black rounded-md transition-colors"
            >
                <Sun className="h-5 w-5" />
            </ToggleGroupItem>

            <ToggleGroupItem
                value="dark"
                aria-label="Toggle dark mode"
                className="p-2 data-[state=on]:bg-gray-800 data-[state=on]:text-white rounded-md transition-colors"
            >
                <Moon className="h-5 w-5" />
            </ToggleGroupItem>

            <ToggleGroupItem
                value="system"
                aria-label="Toggle system theme"
                className="p-2 data-[state=on]:bg-blue-200 data-[state=on]:text-black rounded-md transition-colors"
            >
                <Laptop className="h-5 w-5" />
            </ToggleGroupItem>
        </ToggleGroup>
    );
}
