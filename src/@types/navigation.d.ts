import { MealStorageDTO } from "@storage/meals/MealStorageDTO";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            estatisticas: undefined;
            criacao: undefined;
            edicao: {
                data: MealStorageDTO
            };
            refeicao: {
                data: MealStorageDTO
            };
            feedback: {
                insideDiet: string;
            };
        }
    }
}