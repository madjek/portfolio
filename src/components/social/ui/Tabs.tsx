import { cn } from '@/utils/cn';
import React, { createContext, useContext } from 'react';

type TabsContextValue = {
  value: string;
  onValueChange: (value: string) => void;
};
const TabsContext = createContext<TabsContextValue | undefined>(undefined);
interface TabsProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}
export const Tabs: React.FC<TabsProps> = ({
  value,
  onValueChange,
  children,
}) => {
  return (
    <TabsContext.Provider
      value={{
        value,
        onValueChange,
      }}
    >
      <div className="w-full">{children}</div>
    </TabsContext.Provider>
  );
};
export const TabsList: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="flex flex-wrap gap-2 border-b border-gray-700">
      {children}
    </div>
  );
};
export const TabsTrigger: React.FC<{
  value: string;
  children: React.ReactNode;
}> = ({ value, children }) => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('TabsTrigger must be used within a Tabs component');
  }

  const { value: selectedValue, onValueChange } = context;
  const isActive = selectedValue === value;

  return (
    <button
      className={cn(
        'border-b-2 border-transparent px-4 py-2 text-sm font-medium duration-100',
        isActive
          ? 'border-b-2 border-blue-400 text-blue-400'
          : 'text-gray-400 hover:text-gray-200',
      )}
      onClick={() => onValueChange(value)}
    >
      {children}
    </button>
  );
};
export const TabsContent: React.FC<{
  value: string;
  children: React.ReactNode;
  className?: string;
}> = ({ value, children, className = '' }) => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('TabsContent must be used within a Tabs component');
  }

  const { value: selectedValue } = context;

  if (selectedValue !== value) {
    return null;
  }

  return <div className={className}>{children}</div>;
};
