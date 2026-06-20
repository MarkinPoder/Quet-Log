export interface Quest {
    id: number;
    title: string;
    difficulty: "fácil" | "média" | "difícil";
    completed: boolean;
}