public class Recursividad {

    public static int factorial(int n) {

        if (n == 0) {
            return 1;
        }

        return n * factorial(n - 1);
    }


    public static int fibonacci(int n) {

        if (n <= 1) {
            return n;
        }

        return fibonacci(n - 1) + fibonacci(n - 2);
    }


    public static void hanoi(
            int n,
            char origen,
            char auxiliar,
            char destino) {

        if (n == 1) {

            System.out.println(
                    origen + " -> " + destino
            );

            return;
        }

        hanoi(
                n - 1,
                origen,
                destino,
                auxiliar
        );

        System.out.println(
                origen + " -> " + destino
        );

        hanoi(
                n - 1,
                auxiliar,
                origen,
                destino
        );
    }


    public static void main(String[] args) {

        System.out.println(
                "Factorial de 5: "
                + factorial(5)
        );

        System.out.println(
                "Fibonacci de 8: "
                + fibonacci(8)
        );

        System.out.println(
                "\nTorres de Hanoi:"
        );

        hanoi(
                3,
                'A',
                'B',
                'C'
        );
    }
}