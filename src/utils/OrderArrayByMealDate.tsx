import { MealStorageDTO } from "@storage/meals/MealStorageDTO";

export default function OrganizeArrayByMealDate(meals: MealStorageDTO[]): MealStorageDTO[] {

    console.log('Meals recebidos: ', meals)

    return meals.sort((a: MealStorageDTO, b: MealStorageDTO): number => {
        const [dayA, monthA, yearA] = a.date.split('/')
        const [dayB, monthB, yearB] = b.date.split('/')
        const [HourA, MinuteA] = a.time.split(':')
        const [HourB, MinuteB] = b.time.split(':')
        const DateA = new Date(Number(yearA), Number(monthA) - 1, Number(dayA), Number(HourA) - 5, Number(MinuteA))
        const DateB = new Date(Number(yearB), Number(monthB) - 1, Number(dayB), Number(HourB) - 5, Number(MinuteB))
        
        console.log('Date A: ', DateA, ' Date B: ', DateB, ' Resultado: ', DateA.getTime() - DateB.getTime())
        return DateA.getTime() - DateB.getTime()
    }).reverse();
}