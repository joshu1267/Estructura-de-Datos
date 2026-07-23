
public class CentroOperaciones {

    public static boolean estaOrdenado(Paquete[] lista) {
        for (int i = 0; i < lista.length - 1; i++) {
            if (lista[i].id > lista[i + 1].id) {
                return false;
            }
        }
        return true;
    }
   
  public static int buscarLineal(Paquete[] lista, int id) {
        for (int i = 0; i < lista.length; i++) {
            if (lista[i].id == id) {
                return i;
            }
        }
        return -1;
    }

    public static int buscarBinario(Paquete[] lista, int id) {
        int bajo = 0;
        int alto = lista.length - 1;

        while (bajo <= alto) {
            int medio = bajo + (alto - bajo) / 2;
            if (lista[medio].id == id) {
                return medio;
            } else if (lista[medio].id < id) {
                bajo = medio + 1;
            } else {
                alto = medio - 1;
            }
        }
        return -1;
    }
}
