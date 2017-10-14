import React from 'react';
import {GalleryItem, GalleryThumbnail} from '../Gallery';

export class WorkExperienceSection extends React.Component {
    render = () => (
        <div className="col-xs-10 content-container GalleryThumb__container" style={{display:'none'}}>
                <GalleryThumbnail empresa="Medgrupo" logo={"logo__medgrupo"} periodo="  2016 / 2  " cargo="Desenvolvedor Front-End">
                    <p>Membro do time de desenvolvimento do aplicativo medsoft para mobile.</p>
                    <p>Membro do time de desenvolvimento das apostilas para o aplicativo mobile.</p>
                    <p>Criei o sistema usado para uso de temas nas apostilas.</p>
                </GalleryThumbnail>
                <GalleryThumbnail empresa="Celistics" logo={"logo__celistics"} periodo="2013" cargo="Consultor">
                    <p>Criei aplicação consolidando cronogramas de entregas com capacidade de rastreamento.</p>
                    <p>Automatizei a criação de relatórios contendo gráficos complexos.</p>
                    <p>Criei aplicação para impressão de etiquetas com código de barras.</p>
                </GalleryThumbnail>
                <GalleryThumbnail empresa="Brand Analytics" logo={"logo__brand"} periodo="2013" cargo="Consultor">
                    <p>Criei um processo totalmente automatizado para análise de dados estatísticos complexos</p> <p>Estabeleci um processo para geração de relatório em power-points/excel contendo gráficos pronto para apresentação.</p>
                    <p>No total reduzi o tempo gasto para executar tais atividades de 1 semestre para minutos.</p>
                </GalleryThumbnail>
                <GalleryThumbnail empresa="Cadmus" logo={"logo__cadmus"} periodo="2012 - 2016 / 2" cargo="Consultor">
                    <p className="lead">Cadmus - (Estagiário) Consultor - (2012) 2014 - 2016/2</p>
                    <p>Manutenção do ERP.</p>
                    <p>Desenvolvimento do ERP.</p>
                    <p>Manutenção de bancos de dados.</p>
                    <p>Criação de soluções para uso interno.</p>
                    <p>Integração do ERP com o sistema de pagamentos do Itaú.</p>
                    <p>Alocação em clientes.</p>
                </GalleryThumbnail>
            </div>
    )
}