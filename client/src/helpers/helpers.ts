export function formatNumber(num: number): string {
    if (num >= 1e9) {
        return Math.floor(num / 1e9) + 'B';
    } else if (num >= 1e6) {
        return Math.floor(num / 1e6) + 'M';
    } else if (num >= 1e3) {
        return Math.floor(num / 1e3) + 'k';
    } else {
        return num.toString();
    }
}

export function formatDate(inputDate: string): string {
    const date = new Date(inputDate);
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Воскресенье текущей недели

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // Суббота текущей недели

    if (date.toDateString() === today.toDateString()) {
        return 'Today';
    }

    if (date.toDateString() === yesterday.toDateString()) {
        return 'Yesterday';
    }

    if (date >= startOfWeek && date <= endOfWeek) {
        return date.toLocaleDateString('en-US', { weekday: 'long' }); // Название дня недели
    }

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

