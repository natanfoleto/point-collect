import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { GrFormClose, GrFormTrash } from 'react-icons/gr';

import { signUpRequest } from '~/store/modules/auth/actions';

import axios from 'axios';

import { 
  Image, SelectGroup, SelectEntity, Go, Back, InputGroup, MaterialList, 
  Scroll, Material, Trash, Text 
} from './styles';

import logoImg from '~/assets/logo.png';
import cooperativeImg from '~/assets/cooperative.png';
import tradeImg from '~/assets/trade.png';
import volunterImg from '~/assets/volunter.png';

let materialList = [
  'Plásticos', 'Garrafas', 'Potes', 'Tubos', 'Canos', 'Brinquedos','Sacos', 'Sacolas', 
  'Isopor', 'Alumínio', 'Molas', 'Latas', 'Papéis', 'Vidro', 'Outros'
];

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const [goEnable, setGoEnable] = useState('disabled');
  const [materials, setMaterials] = useState('');
  const [entity, setEntity] = useState('');
  const [cooperative, setCooperative] = useState(false);
  const [trade, setTrade] = useState(false);
  const [pev, setPev] = useState(false);
  
  const [visibleTrue, setVisibleTrue] = useState(true);
  const [visibleFalse, setVisibleFalse] = useState(false);
  const [visibleMaterial, setVisibleMaterial] = useState(false);
  const [visibleTrash, setVisibleTrash] = useState(false);

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [cep, setCep] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  function handleCep(cep) {
    axios.get(`http://viacep.com.br/ws/${cep}/json/`)
    .then(function(response){
      setCep(response.data);
    });
  }

  function handleSubmit(data) {
    dispatch(signUpRequest(data));
  }

  function handleSelect(op, entity) {
    setEntity(entity);

    switch (op) {
      case 1:
        setCooperative(true);
        setTrade(false);
        setPev(false);
        break;
      case 2:
        setTrade(true);
        setCooperative(false);
        setPev(false);
        break;
      case 3:
        setPev(true);
        setTrade(false);
        setCooperative(false);
        break;
    
      default:
        break;
    }

    setGoEnable("");
  }

  function handleGo() {
    setVisibleTrue(!visibleTrue);
    setVisibleFalse(!visibleFalse);
  }

  function handleBack() {
    setVisibleTrue(!visibleTrue);
    setVisibleFalse(!visibleFalse);
  }

  function handleMaterial() {
    setVisibleMaterial(!visibleMaterial);
  }

  function addMaterialField(material) {
    if(materials !== "") {
      setMaterials(materials + ', ' + material);
    } else {
      setMaterials(material);
      setVisibleTrash(!visibleTrash);
    }

    var index = materialList.indexOf(material);
    materialList.splice(index, 1);
  }

  function removeMaterialField() {
    while(materialList.length) {
      materialList.pop();
    }

    materialList = [
      'Plásticos', 'Garrafas', 'Potes', 'Tubos', 'Canos', 'Brinquedos','Sacos', 'Sacolas', 
      'Isopor', 'Alumínio', 'Molas', 'Latas', 'Papéis', 'Vidro', 'Outros'
    ];

    setMaterials('');
    setVisibleTrash(!visibleTrash);
  }

  return (
    <>
      <Image visibleValue={visibleTrue}>
        <img src={logoImg} alt="GoRecicle"/>
      </Image>

      <Form onSubmit={handleSubmit} autoComplete="off">        

        <SelectGroup visibleValue={visibleTrue}>
          <h1>Selecione uma entidade</h1>

          <SelectEntity selected={cooperative}>
            <button type="button" className="select" onClick={() => handleSelect(1, 'Cooperativa')}>
              <img src={cooperativeImg} alt="Cooperativa"/>
              <div className="entity">
                <h1>Cooperativas</h1>
                <p>Iniciativas sociais que trabalham com a coleta e triagem de materiais recicláveis</p>
              </div>
            </button>
          </SelectEntity>

          <SelectEntity selected={trade}>
            <button type="button" className="select" onClick={() => handleSelect(2, 'Comércio')}>
              <img src={tradeImg} alt="Comércio"/>
              <div className="entity">
                <h1>Comércios</h1>
                <p>Locais que compram embalagens longa vida (entre outros recicláveis) para envio à reciclagem</p>
              </div>
            </button>
          </SelectEntity>

          <SelectEntity selected={pev}>
            <button type="button" className="select" onClick={() => handleSelect(3, 'PEV')}>
              <img src={volunterImg} alt="Voluntário"/>
              <div className="entity">
                <h1>Pontos de Entrega Voluntária</h1>
                <p>Locais que recebem embalagens longa vida (entre outros recicláveis) para envio à reciclagem</p>
              </div>
            </button>
          </SelectEntity>
        </SelectGroup>

        <Back visibleValue={visibleFalse}>
          <button type="button" onClick={handleBack}>
            <FiArrowLeft size={24}/>
          </button>
        </Back>

        <InputGroup visibleValue={visibleFalse}>

          <Text>
            <p>Dados empresariais</p>
          </Text>

          <Input name="entity" value={entity} disabled="disabled" required />
          <Input name="name" placeholder="Nome da empresa" maxLength="50" required />

          <Input 
            name="materials" 
            className="material" 
            placeholder="Materiais reciclados na empresa" 
            required
            value={materials}  
            onClick={handleMaterial}
            readOnly={true}
          />

          <Input 
            name="email" 
            type="email" 
            placeholder="E-mail" 
            maxLength="50"
            required 
          />
          <Input 
            name="password" 
            type="password" 
            placeholder="Senha secreta" 
            maxLength="32" 
            minLength="6"
            required 
          />

          <Text>
            <p>Dados geográficos</p>
          </Text>

          <div className="input-group">
            <Input 
              name="latitude" 
              type="number"
              placeholder="Latitude" 
              required
              value={latitude} 
              onChange={e => setLatitude(e.target.value)}
            />
            <Input 
              name="longitude"
              type="number" 
              placeholder="Longitude"
              required 
              value={longitude} 
              onChange={e => setLongitude(e.target.value)}
            />
          </div>

          <Input 
            name="cep" 
            type="cep" 
            placeholder="CEP" 
            maxLength="9"
            onBlur={e => handleCep(e.target.value)}
            required 
          />

          <Input 
            name="logradouro" 
            type="logradouro" 
            placeholder="Rua" 
            maxLength="50"
            required 
          />

          <Input 
            name="numero" 
            type="numero" 
            placeholder="Número" 
            maxLength="10"
            required 
          />

          <Input 
            name="bairro" 
            type="bairro" 
            placeholder="Bairro" 
            maxLength="50"
            required 
          />

          <Input 
            name="localidade" 
            type="localidade" 
            placeholder="Cidade" 
            maxLength="50"
            value={cep.localidade}
            required 
          />

          <Input 
            name="uf" 
            type="uf" 
            placeholder="Estado" 
            maxLength="50"
            value={cep.uf}
            required 
          />

          <Text>
            <p>Dados de contato</p>
          </Text>

          <Input name="site" placeholder="Rede social / Website" maxLength="32" />

          <div className="input-group">
            <Input 
              name="whatsapp" 
              type="number"
              placeholder="WhatsApp" 
              min={11}
              required
              onInput = {(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,11)
              }}
            />
            <Input 
              name="telephone" 
              type="number"
              placeholder="Telefone fixo" 
              min={11}
              required
              onInput = {(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,11)
              }}
            />
          </div>

          <MaterialList materialVisible={visibleMaterial}>
            <div className="close">
              <button type="button" onClick={handleMaterial}>
                <GrFormClose size={18} />
              </button>
            </div>

            <Scroll>   
              <div className="materials">
                {materialList.map(material => (
                  <Material key={material}>
                    <button onClick={() => addMaterialField(material)} type="button" className="button-material">
                      {material}
                    </button>
                  </Material>
                ))}
              </div>
              
              <Trash trashVisible={visibleTrash}>
                <h1>Materiais selecionados</h1>
                <p>{materials}</p>

                <button type="button" onClick={removeMaterialField}>
                  <GrFormTrash size={20} />
                </button>
              </Trash>
            </Scroll>
          </MaterialList>

          <button type="submit">{ loading ? 'Carregando...' : 'Finalizar cadastro' }</button>
        </InputGroup>
          
        <Go visibleValue={visibleTrue}>
          <button type="button" disabled={goEnable} onClick={handleGo}>
            <FiArrowRight size={30}/>
          </button>
        </Go> 

        <Link to="/" style={{ marginBottom: "30px" }}>Já tenho login</Link>

      </Form>   
    </>
  );
}
