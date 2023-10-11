import AnnualPlanImg from "../../assets/icon-music.svg";
import "./AnnualPlan.css";

const AnnualPlan = () => {
    return (
        <div id="AnnualPlan">
                <img alt="Music" src={AnnualPlanImg} />
                <div id="AnnualPlanSpans">
                    <span id="AnnualPlanSpan-1">Annual Plan</span>
                    <span id="AnnualPlanSpan-2">$59.99/year</span>
                </div>
                <span id="Change">Change</span>
        </div>
    );
};

export default AnnualPlan;