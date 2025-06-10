exports.getCodeTemplate = (language) => {
  const templates = {
    c: `#include <stdio.h>
int main() {
    printf("Hello, World!\n");
    return 0;
}`,
    cpp: `#include <iostream>
using namespace std;
int main() {
    cout << "Hello," World!" << endl;
    return 0;
}`,
    java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    python: `print("Hello, World!")`,
    javascript: `console.log("Hello, World!");`,
    php: `<?php
echo "Hello, World!";
?>`
  };
  return templates[language];
};