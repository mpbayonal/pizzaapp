import NewPizzaPage from "./views/NewPizza/NewPizzaPage"
import PizzasPage from "./views/Pizzas/PizzaListaPage"
var Routes =
    [
            {
                    path: "newPizza",
                    name: "Nueva Pizza",
                    component: NewPizzaPage,
                    layout: "/",
            },
        {
            path: "pizzas",
            name: "Lista de Ventas",
            component: PizzasPage,
            layout: "/",
        },

        ];
export default Routes;
