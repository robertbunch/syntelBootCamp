import java.util.GregorianCalendar;

public class Main {
    public static void main(String[] args){
        int x = numberOfBlueMoons(2000,0,1,0,0,2999);
    System.out.println(x);
    }


    public static int numberOfBlueMoons(int startYear, int startMonth, int startDate, int startHour, int startMinute, int endYear){
        int blueMoonCount = 0;
        GregorianCalendar calendar = new GregorianCalendar();
//        We created a Gregorian object, now set a date.
//        For the date, use our function params
        calendar.set(startYear,startMonth,startDate,startHour, startMinute);
//        Start a while loop, as long as the year of the current date we are on, is less than our endYear
        while(calendar.get(GregorianCalendar.YEAR) <= endYear){
            int prevMonth = calendar.get(GregorianCalendar.MONTH);
            calendar.add(GregorianCalendar.DAY_OF_MONTH, 29);
            calendar.add(GregorianCalendar.HOUR, 12);
            calendar.add(GregorianCalendar.MINUTE, 44);
//        So, our new calendar date is the date of the next full moon. Check to see if this new date has the same month as prevMonth
            if(prevMonth == calendar.get(GregorianCalendar.MONTH)){
                blueMoonCount++;
            }
        }
//        System.out.println(calendar.get(GregorianCalendar.DAY_OF_YEAR));
        return blueMoonCount;
    }

}
