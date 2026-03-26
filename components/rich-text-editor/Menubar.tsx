import { Editor } from "@tiptap/react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Toggle } from "../ui/toggle";
import { HugeiconsIcon } from "@hugeicons/react";
import { AlignCenter, AlignLeft, AlignRight, Bold, Heading01Icon, Heading02Icon, Heading03Icon, Italic, List, ListOrdered, Redo, Strikethrough, Undo } from "@hugeicons/core-free-icons";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface iAppProps {
    editor: Editor | null;
}

export function Menubar({ editor }: iAppProps) {
    if(!editor) return null;

    return (
        <div className="border border-input rounded-t-0 border-x-0 p-2 bg-card flex flex-wrap gap-1 items-center">
            <TooltipProvider>
                <div className="flex flex-wrap gap-1">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle 
                                size="sm" 
                                pressed={editor.isActive("bold")} 
                                onPressedChange={() => editor.chain().focus().toggleBold().run()}
                                className={cn(
                                    editor.isActive("bold") && "bg-muted text-muted-foreground"
                                )}
                            >
                                <HugeiconsIcon icon={Bold} strokeWidth={2} />
                            </Toggle>
                        </TooltipTrigger>
                            <TooltipContent>Bold</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle 
                                size="sm" 
                                pressed={editor.isActive("italic")} 
                                onPressedChange={() => editor.chain().focus().toggleItalic().run()}
                                className={cn(
                                    editor.isActive("italic") && "bg-muted text-muted-foreground"
                                )}
                            >
                                <HugeiconsIcon icon={Italic} strokeWidth={2} />
                            </Toggle>
                        </TooltipTrigger>
                            <TooltipContent>Italic</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle 
                                size="sm" 
                                pressed={editor.isActive("strike")} 
                                onPressedChange={() => editor.chain().focus().toggleStrike().run()}
                                className={cn(
                                    editor.isActive("strike") && "bg-muted text-muted-foreground"
                                )}
                            >
                                <HugeiconsIcon icon={Strikethrough} strokeWidth={2} />
                            </Toggle>
                        </TooltipTrigger>
                            <TooltipContent>Strike</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle 
                                size="sm" 
                                pressed={editor.isActive("heading", {level: 1})} 
                                onPressedChange={() => editor.chain().focus().toggleHeading({level: 1}).run()}
                                className={cn(
                                    editor.isActive("heading", {level: 1}) && "bg-muted text-muted-foreground"
                                )}
                            >
                                <HugeiconsIcon icon={Heading01Icon} strokeWidth={2} />
                            </Toggle>
                        </TooltipTrigger>
                            <TooltipContent>Heading 1</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle 
                                size="sm" 
                                pressed={editor.isActive("heading", {level: 2})} 
                                onPressedChange={() => editor.chain().focus().toggleHeading({level: 2}).run()}
                                className={cn(
                                    editor.isActive("heading", {level: 2}) && "bg-muted text-muted-foreground"
                                )}
                            >
                                <HugeiconsIcon icon={Heading02Icon} strokeWidth={2} />
                            </Toggle>
                        </TooltipTrigger>
                            <TooltipContent>Heading 2</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle 
                                size="sm" 
                                pressed={editor.isActive("heading", {level: 3})} 
                                onPressedChange={() => editor.chain().focus().toggleHeading({level: 3}).run()}
                                className={cn(
                                    editor.isActive("heading", {level: 3}) && "bg-muted text-muted-foreground"
                                )}
                            >
                                <HugeiconsIcon icon={Heading03Icon} strokeWidth={2} />
                            </Toggle>
                        </TooltipTrigger>
                            <TooltipContent>Heading 3</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle 
                                size="sm" 
                                pressed={editor.isActive("bulletList")} 
                                onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
                                className={cn(
                                    editor.isActive("bulletList") && "bg-muted text-muted-foreground"
                                )}
                            >
                                <HugeiconsIcon icon={List} strokeWidth={2} />
                            </Toggle>
                        </TooltipTrigger>
                            <TooltipContent>Bullet List</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle 
                                size="sm" 
                                pressed={editor.isActive("orderedList")} 
                                onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
                                className={cn(
                                    editor.isActive("orderedList") && "bg-muted text-muted-foreground"
                                )}
                            >
                                <HugeiconsIcon icon={ListOrdered} strokeWidth={2} />
                            </Toggle>
                        </TooltipTrigger>
                            <TooltipContent>Ordered List</TooltipContent>
                    </Tooltip>
                </div>

                <div className="w-px h-6 bg-border mx-2">
                </div>
                <div className="flex flex-wrap gap-1">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle 
                                size="sm" 
                                pressed={editor.isActive({textAlign: "left"})} 
                                onPressedChange={() => editor.chain().focus().setTextAlign("left").run()}
                                className={cn(
                                    editor.isActive({textAlign: "left"}) && "bg-muted text-muted-foreground"
                                )}
                            >
                                <HugeiconsIcon icon={AlignLeft} strokeWidth={2} />
                            </Toggle>
                        </TooltipTrigger>
                            <TooltipContent>Align Left</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle 
                                size="sm" 
                                pressed={editor.isActive({textAlign: "center"})} 
                                onPressedChange={() => editor.chain().focus().setTextAlign("center").run()}
                                className={cn(
                                    editor.isActive({textAlign: "center"}) && "bg-muted text-muted-foreground"
                                )}
                            >
                                <HugeiconsIcon icon={AlignCenter} strokeWidth={2} />
                            </Toggle>
                        </TooltipTrigger>
                            <TooltipContent>Align Center</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle 
                                size="sm" 
                                pressed={editor.isActive({textAlign: "right"})} 
                                onPressedChange={() => editor.chain().focus().setTextAlign("right").run()}
                                className={cn(
                                    editor.isActive({textAlign: "right"}) && "bg-muted text-muted-foreground"
                                )}
                            >
                                <HugeiconsIcon icon={AlignRight} strokeWidth={2} />
                            </Toggle>
                        </TooltipTrigger>
                            <TooltipContent>Align Right</TooltipContent>
                    </Tooltip>
                </div>
                <div className="w-px h-6 bg-border mx-2">
                </div>
                <div className="flex flex-wrap gap-1">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                size="sm"
                                variant="ghost"
                                type="button"
                                onClick={() => editor.chain().focus().undo().run()}
                                disabled={!editor.can().undo()}
                            >
                                <HugeiconsIcon icon={Undo} strokeWidth={2} />
                            </Button>
                        </TooltipTrigger>
                            <TooltipContent>Undo</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                size="sm"
                                variant="ghost"
                                type="button"
                                onClick={() => editor.chain().focus().redo().run()}
                                disabled={!editor.can().redo()}
                            >
                                <HugeiconsIcon icon={Redo} strokeWidth={2} />
                            </Button>
                        </TooltipTrigger>
                            <TooltipContent>Redo</TooltipContent>
                    </Tooltip>
                </div>
            </TooltipProvider>
        </div>
    );
}