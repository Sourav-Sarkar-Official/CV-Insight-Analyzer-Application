import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { jobDescriptionTemplates } from '@/lib/jobTemplates';
import { JobDescriptionTemplate } from '@/types';
import { FileTextIcon, EyeIcon, CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface JobTemplateSelectorProps {
  onSelectTemplate: (template: JobDescriptionTemplate) => void;
  selectedTemplateId?: string;
}

const JobTemplateSelector = ({ onSelectTemplate, selectedTemplateId }: JobTemplateSelectorProps) => {
  const [previewTemplate, setPreviewTemplate] = useState<JobDescriptionTemplate | null>(null);

  const handleSelectTemplate = (template: JobDescriptionTemplate) => {
    onSelectTemplate(template);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium">Need a Job Description?</h3>
          <p className="text-xs text-muted-foreground">Choose from our web development templates</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {jobDescriptionTemplates.map((template, index) => {
          const gradients = [
            'bg-gradient-to-br from-violet-100 via-fuchsia-50 to-pink-100 border-white/60',
            'bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100 border-white/60',
            'bg-gradient-to-br from-blue-100 via-indigo-50 to-cyan-100 border-white/60',
            'bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 border-white/60',
            'bg-gradient-to-br from-rose-100 via-red-50 to-orange-100 border-white/60',
          ];
          const gradientClass = gradients[index % gradients.length];

          return (
            <Card 
              key={template.id} 
              className={cn(
                "cursor-pointer transition-all hover:shadow-md border shadow-sm",
                gradientClass,
                selectedTemplateId === template.id 
                  ? "ring-2 ring-primary shadow-md" 
                  : "hover:ring-1 hover:ring-primary/50"
              )}
              onClick={() => handleSelectTemplate(template)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-semibold text-slate-800">{template.title}</CardTitle>
                  {selectedTemplateId === template.id && (
                    <CheckIcon className="h-4 w-4 text-primary" />
                  )}
                </div>
                <CardDescription className="text-xs line-clamp-3 text-slate-600/90 mt-1">
                  {template.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {template.skills.slice(0, 3).map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs bg-white/60 hover:bg-white text-slate-700 border-0 shadow-sm rounded-full font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                  {template.skills.length > 3 && (
                    <Badge 
                      variant="outline" 
                      className="text-xs bg-white/60 hover:bg-white text-slate-700 border-0 shadow-sm rounded-full font-medium"
                    >
                      +{template.skills.length - 3} more
                    </Badge>
                  )}
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full text-xs hover:bg-white/40 text-slate-700 font-medium"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPreviewTemplate(template);
                    }}
                  >
                    <EyeIcon className="h-3 w-3 mr-1" />
                    Preview
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh]">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <FileTextIcon className="h-5 w-5" />
                      {template.title} - Job Description Template
                    </DialogTitle>
                    <DialogDescription>
                      Use this template or customize it for your specific needs
                    </DialogDescription>
                  </DialogHeader>
                  
                  <ScrollArea className="max-h-[60vh] pr-4">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Job Description</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {template.description}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-sm mb-3">Required Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {template.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-sm mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {template.responsibilities.map((responsibility, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </ScrollArea>
                  
                  <div className="flex justify-end gap-2 pt-4 border-t">
                    <Button 
                      variant="outline" 
                      onClick={() => setPreviewTemplate(null)}
                    >
                      Close
                    </Button>
                    <Button 
                      onClick={() => {
                        handleSelectTemplate(template);
                        setPreviewTemplate(null);
                      }}
                    >
                      Use This Template
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
          );
        })}
      </div>
    </div>
  );
};

export default JobTemplateSelector;

