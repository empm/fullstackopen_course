# fullstackopen_course
## 📚 Ejercicio 1.10 — Unicafe paso 5

**Enunciado clave:**  
Extrae dos componentes más:

- `Button`: para los botones de feedback.  
- `StatisticLine`: para mostrar una sola estadística (texto + valor).

La aplicación debe usar múltiples `StatisticLine` dentro de `Statistics`. El estado sigue en `App`.

**Lo esencial a aprender:**

- Componentes pequeños y especializados con una sola responsabilidad.  
- `Button` muestra un botón y ejecuta una función al hacer clic.  
- `StatisticLine` muestra una sola línea de estadística.  
- `Statistics` delega en `StatisticLine` la presentación de cada dato.  
- Mejora de legibilidad y organización del código.