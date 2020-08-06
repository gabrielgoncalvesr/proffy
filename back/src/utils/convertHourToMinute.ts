const convertHourToMinute = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    const timeInMinute = (hours * 60) + minutes;

    return timeInMinute;
}

export default convertHourToMinute;