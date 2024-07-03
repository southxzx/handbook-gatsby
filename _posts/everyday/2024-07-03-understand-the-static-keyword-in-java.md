---
title: "Understand the 'static' keyword in Java"
tags: ["java", "OOP"]
date: 2024/07/03
slug: 2024-07-03-understand-the-static-keyword-in-java
---

We can think of `static` is something **related to the class itself rather than to an instance of the class**.

## 1. Class Variables

```java
public class Bicycle {      
  private int cadence;
  private int gear;
  private int speed;
  private int id;
  private static int numberOfBicycles = 0;
      
  public Bicycle(int startCadence, int startSpeed, int startGear){
      gear = startGear;
      cadence = startCadence;
      speed = startSpeed;

      // increment number of Bicycles
      // and assign ID number
      id = ++numberOfBicycles;
  }

  // new method to return the ID instance variable
  public int getID() {
      return id;
  }
      ...
}
```

The variable `numberOfBicycles` is common to all objects/instance. Or we can say that all objects of the class share this variable.

Class variables are referenced by the class name itself: `Bicycle.numberOfBicycles`

Not recommended to write class variables like this: `myBike.numberOfBicycles`

## 2. Class Methods

```java
public static int getNumberOfBicycles() {
    return numberOfBicycles;
}
```

A common usage of static methods is to access static fields.

The `main` method in Java is typically declared with static modifier. This allows the Java Virtual Machine (JVM) to invoke the `main` method without needing to create an instance of the class containing the `main` method.

```java
public static void main(String[] args)
```

**Note**: Class methods **cannot** access instance variable or instance methods directly. And it **cannot** use the `this` keyword.

## 3. Constant

```java
static final double PI = 3.141592653589793;
```

`static` + `final` can be used to define constants. 

**Note**: If a primitive type or a string is defined as a constant then the value is known at compile time.

Refs:

https://docs.oracle.com/javase/tutorial/java/javaOO/classvars.html
