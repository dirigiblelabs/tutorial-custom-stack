package io.dirigible.samples;

public class MyFacade {
	
    public static String greet() {
        return "Hello, welcome to my custom Eclipse Dirigible stack!";
    }

    public int add(int a, int b) {
        return a + b;
    }

    public int multiply(int a, int b) {
        return a * b;
    }

    public String customMethod(String input) {
        // Your custom logic here
        return "Processed input: " + input;
    }

}