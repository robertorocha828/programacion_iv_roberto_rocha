import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';


interface AspiranteContextType {
 aspirante: string;
 carrera: string;
 setAspirante: (aspirante: string) => void;
 setCarrera: (carrera: string) => void;
}


const AspiranteContext = createContext<
 AspiranteContextType | undefined
>(undefined);


interface AspiranteProviderProps {
 children: ReactNode;
}


export function AspiranteProvider({
 children,
}: AspiranteProviderProps) {
 const [aspirante, setAspirante] = useState<string>(
   'Camila Andrade'
 );
 const [carrera, setCarrera] = useState<string>('');


 return (
   <AspiranteContext.Provider
     value={{ aspirante, setAspirante, carrera, setCarrera }}
   >
     {children}
   </AspiranteContext.Provider>
 );
}


function useAspiranteContext(): AspiranteContextType {
 const context = useContext(AspiranteContext);


 if (context === undefined) {
   throw new Error(
     'Los hooks del aspirante deben utilizarse dentro de AspiranteProvider'
   );
 }


 return context;
}


export function useAspirante() {
 const { aspirante, setAspirante } = useAspiranteContext();
 return { aspirante, setAspirante };
}


export function useCarrera() {
 const { carrera, setCarrera } = useAspiranteContext();
 return { carrera, setCarrera };
}
