import NewPizzaPage from "./views/NewPizza/NewPizzaPage"
var pizzaRoutes =
    [
            {
                    endPath: "/newPizza",
                    name: "Nueva Pizza",
                    component: NewPizzaPage,
                    startPath: "/home",
            }
        ];
export default pizzaRoutes;
