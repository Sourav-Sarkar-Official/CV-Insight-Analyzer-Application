import React from 'react';
import { useAnalysis } from '@/context/AnalysisContext';
import { AnalysisStep } from '@/types';
import { cn } from '@/lib/utils';
import { CheckIcon } from 'lucide-react';

const StepIndicator = () => {
  const { currentStep } = useAnalysis();
  
  const steps: { id: AnalysisStep; label: string }[] = [
    { id: 'upload', label: 'Upload' },
    { id: 'assessment', label: 'Assessment' },
    { id: 'result', label: 'Result' },
  ];
  
  const getCurrentStepIndex = () => {
    return steps.findIndex(step => step.id === currentStep);
  };
  
  const currentStepIndex = getCurrentStepIndex();
  
  return (
    <div className="w-full">
      <div className="flex items-center w-full max-w-3xl mx-auto px-4 pt-10 pb-16">
        {steps.map((step, index) => {
          const isActive = index <= currentStepIndex;
          const isCompleted = index < currentStepIndex;
          
          return (
            <React.Fragment key={step.id}>
              {/* Step Circle and Label */}
              <div className="relative flex justify-center z-10 shrink-0">
                <div 
                  className={cn(
                    "flex items-center justify-center w-12 h-12 rounded-full border-2 bg-white transition-all duration-300",
                    isActive 
                      ? "border-blue-500 text-blue-500" 
                      : "border-slate-200 text-slate-400"
                  )}
                >
                  {isCompleted ? (
                    <CheckIcon className="w-5 h-5" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                {/* Absolute position for label to keep spacing independent */}
                <div 
                  className={cn(
                    "absolute top-14 w-32 left-1/2 -translate-x-1/2 text-center font-medium transition-all duration-300",
                    isActive ? "text-slate-800" : "text-slate-400"
                  )}
                >
                  {step.label}
                </div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-[2px] bg-slate-200 mx-2 relative top-0 z-0">
                  <div 
                    className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-500 ease-in-out"
                    style={{ 
                      width: currentStepIndex > index ? '100%' : '0%'
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;
