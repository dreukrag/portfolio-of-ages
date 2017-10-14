import React from 'react';
import { GalleryItem, GalleryThumbnail } from '../Gallery';

export class WorkExperienceSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDefaultText: '',
            showMedgrupoText: 'none',
            showCelisticsText: 'none',
            showBrandText: 'none',
            showCadmusText: 'none'
        }

    }

    medgrupoText = (
        [<p>Membro do time de desenvolvimento do aplicativo medsoft para mobile.</p>,
        <p>Membro do time de desenvolvimento das apostilas para o aplicativo mobile.</p>,
        <p>Criei o sistema usado para uso de temas nas apostilas.</p>]
    )

    celisticsText = (
        [
            <p>Criei aplicação consolidando cronogramas de entregas com capacidade de rastreamento.</p>,
            <p>Automatizei a criação de relatórios contendo gráficos complexos.</p>,
            <p>Criei aplicação para impressão de etiquetas com código de barras.</p>
        ]
    )

    brandText = (
        [
            <p>Criei um processo totalmente automatizado para análise de dados estatísticos complexos</p>, <p>Estabeleci um processo para geração de relatório em power-points/excel contendo gráficos pronto para apresentação.</p>,
            <p>No total reduzi o tempo gasto para executar tais atividades de 1 semestre para minutos.</p>
        ]
    )


    cadmusText = (
        [
            <p className="lead">Cadmus - (Estagiário) Consultor - (2012) 2014 - 2016/2</p>,
            <p>Manutenção do ERP.</p>,
            <p>Desenvolvimento do ERP.</p>,
            <p>Manutenção de bancos de dados.</p>,
            <p>Criação de soluções para uso interno.</p>,
            <p>Integração do ERP com o sistema de pagamentos do Itaú.</p>,
            <p>Alocação em clientes.</p>
        ]
    )

    render = () => (
        <div className="work-section__main">
            <div className="content-container GalleryThumb__container work-section__experiences" style={{ display: '' }}>
                <GalleryThumbnail empresa="Medgrupo" logo={"logo__medgrupo"} periodo="  2016 / 2  " cargo="Desenvolvedor Front-End" clickFunc={this.showText} textId={1} />
                <GalleryThumbnail empresa="Celistics" logo={"logo__celistics"} periodo="2013" cargo="Consultor" clickFunc={this.showText} textId={2} />
                <GalleryThumbnail empresa="Brand Analytics" logo={"logo__brand"} periodo="2013" cargo="Consultor" clickFunc={this.showText} textId={3} />
                <GalleryThumbnail empresa="Cadmus" logo={"logo__cadmus"} periodo="2012 - 2016 / 2" cargo="Consultor" clickFunc={this.showText} textId={4} />
            </div>
            <div className="work-section__text">
                <p style={{ display: this.state.showDefaultText }}>
                    Checkout my experiences!
                </p>
                <span style={{ display: this.state.showMedgrupoText }}>{this.medgrupoText}</span>
                <span style={{ display: this.state.showCelisticsText }}>{this.celisticsText}</span>
                <span style={{ display: this.state.showBrandText }}>{this.brandText}</span>
                <span style={{ display: this.state.showCadmusText }}>{this.cadmusText}</span>
            
                    <button className="btn btn-default header__buttons-selector knoweledge-invasor"><span className="glyphicon glyphicon-education"></span></button>
            
            </div>
        </div>
    )

    showText = (nbr) => {
        switch (nbr) {
            case 1:
                this.setState(
                    {
                        showMedgrupoText: '',
                        showCelisticsText: 'none',
                        showBrandText: 'none',
                        showCadmusText: 'none',
                        showDefaultText: 'none'
                    }
                )
                break;
            case 2:
                this.setState(
                    {
                        showMedgrupoText: 'none',
                        showCelisticsText: '',
                        showBrandText: 'none',
                        showCadmusText: 'none',
                        showDefaultText: 'none'
                    }
                )
                break;
            case 3:
                this.setState(
                    {
                        showMedgrupoText: 'none',
                        showCelisticsText: 'none',
                        showBrandText: '',
                        showCadmusText: 'none',
                        showDefaultText: 'none'
                    }
                )
                break;
            case 4:
                this.setState(
                    {
                        showMedgrupoText: 'none',
                        showCelisticsText: 'none',
                        showBrandText: 'none',
                        showCadmusText: '',
                        showDefaultText: 'none'
                    }
                )
                break;
            case 0:
                this.setState(
                    {
                        showMedgrupoText: 'none',
                        showCelisticsText: 'none',
                        showBrandText: 'none',
                        showCadmusText: 'none',
                        showDefaultText: 'none'
                    }
                )
                break;
            default:
                this.setState(
                    {
                        showMedgrupoText: 'none',
                        showCelisticsText: 'none',
                        showBrandText: 'none',
                        showCadmusText: 'none',
                        showDefaultText: 'none'
                    }
                )
                break;
        }
    }
}