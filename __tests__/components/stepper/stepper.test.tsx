import { render, screen } from "@testing-library/react";
import Stepper from "../../../components/stepper/stepper";

const renderStepper = (props: { steps: { title: string }[]; currentStep: number }) => {
	return render(<Stepper {...props} />);
};

// TODO: Implement your tests here
describe("Stepper", () => {
	const steps = [
		{ title: "Step 1" },
		{ title: "Step 2" },
		{ title: "Step 3" },
	];
	it("renders all step numbers", () => {
		renderStepper({ steps, currentStep: 1 });
		const stepNumbers = steps.map((_, i) =>
			screen.getByTestId(`step-number-${i + 1}`)
		);
		expect(stepNumbers).toHaveLength(3);
	});

	it("highlights active step correctly", () => {
		renderStepper({ steps, currentStep: 1 });
		const activeStep = screen.getByTestId(`step-number-2`);
		expect(activeStep).toHaveClass("bg-blue-500");
	});

	it("renders correct numbers inside circles", () => {
		renderStepper({ steps, currentStep: 1 });
		steps.forEach((_, i) => {
			const step = screen.getByTestId(`step-number-${i + 1}`);
			expect(step).toHaveTextContent((i + 1).toString());
		});
	});

	it("marks all previous steps as active when a step is current", () => {
		renderStepper({ steps, currentStep: 1 });

		steps.forEach((_, i) => {
			const step = screen.getByTestId(`step-number-${i + 1}`);
			if (i <= 1) {
				expect(step).toHaveClass("bg-blue-500");
				expect(step).not.toHaveClass("bg-gray-300");
			} else {
				expect(step).toHaveClass("bg-gray-300");
				expect(step).not.toHaveClass("bg-blue-500");
			}
		});
	});

	it("renders all step titles", () => {
		renderStepper({ steps, currentStep: 1 });
		steps.forEach((step) => {
			expect(screen.getByText(step.title)).toBeInTheDocument();
		});
	})
});
