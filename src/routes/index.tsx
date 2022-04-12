import react from 'react';
import { Route, Routes } from 'react-router-dom';
import { EduardoCastro, JoaoCastro, JoseMauro, JulianoRamos } from '../pages/Cards';
import { PageQRCode } from '../pages/QR-Code';

const AppRoutes: React.FC = () => {
    return(        
        <Routes>
            <Route path='/' element={<PageQRCode />} />                   
            <Route path='/eduardo.castro' element={<EduardoCastro />} />                   
            <Route path='/joao.castro' element={<JoaoCastro />} />                   
            <Route path='/juliano.ramos' element={<JulianoRamos />} />                   
            <Route path='/jose.mauro' element={<JoseMauro />} />                                                 
        </Routes>       
    );
}

export { AppRoutes };