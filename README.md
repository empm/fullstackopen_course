# fullstackopen_course
## Ejercicio 1.10 (Unicafe paso 5)

> Enunciado clave:
> Extrae dos componentes más:
>	•	Button para los botones de feedback.
>	•	StatisticLine para mostrar una única estadística (texto + valor).

La aplicación usa múltiples StatisticLine dentro de Statistics. El estado sigue en App.  ￼

## Lo importante a aprender:
- Reutilización de componentes pequeños y especializados (Button, StatisticLine).
- Cada componente tiene una única responsabilidad:
    - Button → mostrar botón + manejar clic
    - StatisticLine → mostrar solo un par texto + valor

- Simplificar Statistics al delegar la renderización de cada línea a StatisticLine. 
- Mejor organización y legibilidad del código.
