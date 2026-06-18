import java.util.Arrays;
import java.util.Random;


public class Main {

    private static final int[] TAMANIOS = {1000, 5000, 10000, 50000, 100000};

    public static void main(String[] args) {
        System.out.printf(
                "%-10s %-16s %-16s %-16s %-18s%n",
                "N", "Lineal (s)", "Orden. (s)", "Binaria (s)", "Binaria+Orden (s)");
        System.out.println("-".repeat(80));

        for (int n : TAMANIOS) {
            ejecutarPrueba(n);
        }
    }

    private static void ejecutarPrueba(int n) {
        Random rnd = new Random();

        Paquete[] paquetes = new Paquete[n];
        for (int i = 0; i < n; i++) {
            paquetes[i] = new Paquete(rnd.nextInt(n * 10));
        }

        int idObjetivo = paquetes[n - 1].id;


        long inicio = System.nanoTime();
        CentroOperaciones.buscarLineal(paquetes, idObjetivo);
        double tiempoLineal = (System.nanoTime() - inicio) / 1e9;


        inicio = System.nanoTime();
        Arrays.sort(paquetes, (a, b) -> Integer.compare(a.id, b.id));
        double tiempoOrden = (System.nanoTime() - inicio) / 1e9;


        if (!CentroOperaciones.estaOrdenado(paquetes)) {
            throw new IllegalStateException(
                    "Los datos no quedaron ordenados; no se puede aplicar búsqueda binaria.");
        }


        inicio = System.nanoTime();
        CentroOperaciones.buscarBinario(paquetes, idObjetivo);
        double tiempoBinario = (System.nanoTime() - inicio) / 1e9;

        double tiempoBinarioTotal = tiempoOrden + tiempoBinario;

        System.out.printf(
                "%-10d %-16.9f %-16.9f %-16.9f %-18.9f%n",
                n, tiempoLineal, tiempoOrden, tiempoBinario, tiempoBinarioTotal);
    }
}