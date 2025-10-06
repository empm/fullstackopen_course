# fullstackopen_course
## 📚 Ejercício 1.8 — Unicafe paso 3

**Enunciado clave:**  
Refactoriza la aplicación para extraer un componente **`Statistics`** que muestre todas las estadísticas. El estado debe permanecer en `App`.

**Lo esencial a aprender:**

- Separación de responsabilidades: el componente `App` mantiene estado; `Statistics` presenta datos.  
- No definir componentes dentro de otros componentes.  
- Pasar los datos necesarios (`good`, `neutral`, `bad`) como props al componente `Statistics`.