public static void reverseString(String s1) {
​
	StringBuilder noSpecialChar = new StringBuilder(s1.replaceAll("\\W", " "));
	StringTokenizer st = new StringTokenizer(noSpecialChar.toString());
​
	while (st.hasMoreElements()) {
	  String token = st.nextToken();
	  StringBuilder sb = new StringBuilder(token);
	  s1 = s1.replace(token, sb.reverse());
	}
​
	System.out.println(s1);
}