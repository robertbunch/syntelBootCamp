import java.util.GregorianCalendar;

public class Main {

    public static void main(String[] args) {
//	    27.3 days for the moon to orbit the earth
//                the actual phase is different because the earth goes 45 million miles around the sun in those 27.3 days
//                it takes 2.2 days for the moon to make up that distance
//                when the moon is full twice in one month, the second one is a blue moon
//                last was july 2015 1st and 31st
//                next is january of 2018 the same july days
//                assume it happens at midnight
//                how many blue moons will there be in the third millenia 2000-2999
        System.out.println(numberOfBlueMoons(2000, GregorianCalendar.FEBRUARY, 19, 16, 27, 2999));
    }

    public static int numberOfBlueMoons(int startYear, int startMonth, int startDate, int startHour, int startMinute, int endYear) {
        int count = 0;
        GregorianCalendar cal = new GregorianCalendar();
        cal.set(startYear, startMonth, startDate, startHour, startMinute);
        while (cal.get(GregorianCalendar.YEAR) <= endYear) {
            int previousMonth = cal.get(GregorianCalendar.MONTH);
            cal.add(GregorianCalendar.DAY_OF_MONTH, 29);
            cal.add(GregorianCalendar.HOUR, 12);
            cal.add(GregorianCalendar.MINUTE, 44);
            if (previousMonth == cal.get(GregorianCalendar.MONTH)) {
                count++;
            }
        }
        return count;
    }
}