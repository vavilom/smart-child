export class Helper {
    getRange(number){
        let result: number[] = [];

        for (let i = 0; i <= number; i++) {
            result.push(i);
        }

        return result;
    }

    shuffleInPlace<T>(array: T[]): T[] {
        // if it's 1 or 0 items, just return
        if (array.length <= 1) return array;
        
        // For each index in array
        for (let i = 0; i < array.length; i++) {
            const randomChoiceIndex = this.getRandomInt(i, array.length);
            [array[i], array[randomChoiceIndex]] = [array[randomChoiceIndex], array[i]];
        }
        return array;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
      
}