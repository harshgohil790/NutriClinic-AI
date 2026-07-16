import Card from "../common/Card";

function MealPlanCard({ mealPlan }) {

    return (

        <Card className="mb-5">

            <div className="flex justify-between">

                <h2 className="text-xl font-bold">

                    Meal Plan

                </h2>

                <p className="text-sm text-gray-500">

                    {new Date(mealPlan.createdAt).toLocaleDateString()}

                </p>

            </div>

            <div className="grid grid-cols-2 gap-5 mt-6">

                <div>

                    <h3 className="font-semibold">Breakfast</h3>
                    <p>{mealPlan.breakfast}</p>

                </div>

                <div>

                    <h3 className="font-semibold">Morning Snack</h3>
                    <p>{mealPlan.morningSnack}</p>

                </div>

                <div>

                    <h3 className="font-semibold">Lunch</h3>
                    <p>{mealPlan.lunch}</p>

                </div>

                <div>

                    <h3 className="font-semibold">Evening Snack</h3>
                    <p>{mealPlan.eveningSnack}</p>

                </div>

                <div>

                    <h3 className="font-semibold">Dinner</h3>
                    <p>{mealPlan.dinner}</p>

                </div>

                <div>

                    <h3 className="font-semibold">Calories</h3>
                    <p>{mealPlan.calories} kcal</p>

                </div>

            </div>

            <div className="mt-5">

                <h3 className="font-semibold">

                    Notes

                </h3>

                <p>{mealPlan.notes || "No Notes"}</p>

            </div>

        </Card>

    );

}

export default MealPlanCard;