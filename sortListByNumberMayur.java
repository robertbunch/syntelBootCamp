HashMap<Character, Integer> charValue = new HashMap<>();
       int index = 1;
       for (char alphabet = 'A'; alphabet <= 'Z'; alphabet++) {
           charValue.put(alphabet, index);
           index++;
       }

       File file = new File("C:\\Users\\syntel\\Desktop\\Java_Program\\Hello-World\\src\\names.txt");
       String [] temp = new String[0];
       HashMap<String, Integer> nameValue = new HashMap<>();
       int totalSumOfNameValues = 0;
       try {
           Scanner s = new Scanner(file);
           while (s.hasNextLine()) {
               String name = s.nextLine();
               temp = name.split(",");
               System.out.println(temp.length);
           }
       } catch (IOException e) {
           System.out.println("Error accessing input file!");
       }
       Arrays.sort(temp);
       for (String str : temp) {
          String tempStr = str;
          int sumStr = 0;
           for (int j = 0; j < tempStr.length(); j++) {
               char ch = tempStr.charAt(j);
               for (Character tempCh : charValue.keySet()) {
                   if(tempCh.equals(ch)) {
                       int chrIntVal = charValue.get(tempCh);
                       sumStr = chrIntVal + sumStr;
                   }
               }
           }
           totalSumOfNameValues = sumStr + totalSumOfNameValues;
           nameValue.put(tempStr, sumStr);
       }

       List<Map.Entry<String, Integer>> list = nameValue.entrySet().stream().sorted(Map.Entry.comparingByValue()).collect(Collectors.toList());
       System.out.println("The list of alphabet and values pairs " + charValue);
       System.out.println("The list of names with values : " + nameValue.entrySet());
       System.out.println("The sorted list in ascending order : " + list);
       System.out.println("The total sum of all names values " + totalSumOfNameValues);