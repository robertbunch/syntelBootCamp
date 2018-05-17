public static void sortListByNumber(){

       try{
           File file = new File("C:\\Users\\syntel\\Desktop\\JavaProjects\\Week_12\\src\\com\\company\\names.txt");
           Scanner sc = new Scanner(file);

           HashMap<String, Integer> nameMap = new HashMap<String, Integer>();
           ArrayList<Integer> sortValues = new ArrayList<Integer>();

           String names = "";

           names = sc.next();

           names = names.replaceAll("\"", "");
           String[] nameArr = names.split(",");

           for(int i = 0; i < nameArr.length; i++){
               int nameValue = 0;
               for(int j = 0; j < nameArr[i].length(); j++){
                 nameValue += ((int)nameArr[i].charAt(j) - 64);
               }
               sortValues.add(nameValue);
               nameMap.put(nameArr[i], nameValue);
           }

           Collections.sort(sortValues);

           for(int i = 0; i < sortValues.size(); i++){
               for(String key: nameMap.keySet()){
                   if(nameMap.get(key) == sortValues.get(i)){
                       System.out.println(key + " : " + nameMap.get(key));
                   }
               }
           }
           sc.close();
       }
       catch(Exception e){
           System.out.println(e);
       }

   }