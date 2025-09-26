import React from "react";

interface Step {
	title: string;
}

interface StepperProps {
	steps: Step[];
	currentStep: number;
}

export default function Stepper(props: StepperProps) {
	/*TODO: Replace this with the actual Stepper implementation*/
	const { steps, currentStep } = props
	return (
		<div
			className={
				"h-[100px] border border-dashed border-gray-200 rounded flex justify-center items-center"
			}
		>
			<div className="relative w-full grid grid-rows-2 grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center">
				{steps.map((step, index) => (
					<React.Fragment key={index}>
						<div className="flex flex-col items-center relative z-10 row-start-1">
							<div data-testid={`step-number-${index + 1}`} className={`flex items-center justify-center rounded-full border-2 aspect-square min-w-[40px] min-h-[40px]
          ${index <= currentStep
									? "bg-blue-500 text-white border-blue-500"
									: "bg-gray-300 border-gray-300 text-gray-600"}`}>
								{index + 1}

							</div>
						</div>
						<div className="flex justify-center relative z-10 row-start-2">
							<p className="text text-center">{step.title}</p>
						</div>
						{index < steps.length - 1 && <div

							className={`absolute top-1/4 h-1 
    	  ${index < currentStep ? "bg-blue-500" : "bg-gray-300"} 
    	  z-0 
    	  -translate-y-full`}
							style={{
								left: `calc(${(index + 0.5) * (100 / steps.length)}%)`,
								width: `calc(${100 / steps.length}%)`,
								transform: `translateY(-10%)`,
							}}
						/>}
					</React.Fragment>
				))}
			</div>
		</div>
	);
}
