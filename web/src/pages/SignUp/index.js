import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { Image, SelectGroup, Select, Go, Back, InputGroup, MaterialList, Scroll, Material, Trash } from './styles';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { GrFormClose, GrFormTrash } from 'react-icons/gr';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import logoImg from '~/assets/logo.png';
import cooperativeImg from '~/assets/cooperative.png';
import tradeImg from '~/assets/trade.png';
import volunterImg from '~/assets/volunter.png';

const schema = Yup.object().shape({
  entity: Yup.string()
    .required('A entidade é obrigatória'),
  name: Yup.string()
    .required('O nome da empresa é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve conter mais de 6 digitos')
    .required('A senha é obrigatória'),
  latitude: Yup.number()
    .required('A latitude é obrigatória'),
  longitude: Yup.number()
    .required('A latitude é obrigatória'),
  site: Yup.string(),
  materials: Yup.string()
    .required('Os materiais são obrigatórios'),
  whatsapp: Yup.string(),
  telephone: Yup.string(),
});

let materialList = ['Plásticos', 'Garrafas', 'Tubos e canos', 'Brinquedos', 'Sacos', 'Isopor', 
'Alumínio', 'Papel', 'Papelão', 'Embalagens longa-vida', 'Vidros', 'Cerâmicas', 'Acrílico', 
'Lâmpadas', 'Pilhas', 'Movéis'];

export default function SignUp() {
  const dispatch = useDispatch();

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

    materialList = ['Plásticos', 'Garrafas', 'Tubos e canos', 'Brinquedos', 'Sacos', 'Isopor', 
      'Alumínio', 'Papel', 'Papelão', 'Embalagens longa-vida', 'Vidros', 'Cerâmicas', 'Acrílico', 
      'Lâmpadas', 'Pilhas', 'Movéis'];

    setMaterials('');
    setVisibleTrash(!visibleTrash);
  }

  return (
    <>
      <Image visibleValue={visibleTrue}>
        <img src={logoImg} alt="GoRecicle"/>
      </Image>

      <Form onSubmit={handleSubmit} schema={schema} autoComplete="off">        

        <SelectGroup visibleValue={visibleTrue}>
          <h1>Selecione uma entidade</h1>

          <Select selected={cooperative}>
            <button type="button" className="select" onClick={() => handleSelect(1, 'Cooperativa')}>
              <img src={cooperativeImg} alt="Cooperativa"/>
              <div className="entity">
                <h1>Cooperativas</h1>
                <p>Iniciativas sociais que trabalham com a coleta e triagem de materiais recicláveis</p>
              </div>
            </button>
          </Select>

          <Select selected={trade}>
            <button type="button" className="select" onClick={() => handleSelect(2, 'Comércio')}>
              <img src={tradeImg} alt="Comércio"/>
              <div className="entity">
                <h1>Comércios</h1>
                <p>Locais que compram embalagens longa vida (entre outros recicláveis) para envio à reciclagem</p>
              </div>
            </button>
          </Select>

          <Select selected={pev}>
            <button type="button" className="select" onClick={() => handleSelect(3, 'PEV')}>
              <img src={volunterImg} alt="Voluntário"/>
              <div className="entity">
                <h1>Pontos de Entrega Voluntária</h1>
                <p>Locais que recebem embalagens longa vida (entre outros recicláveis) para envio à reciclagem</p>
              </div>
            </button>
          </Select>
        </SelectGroup>

        <Back visibleValue={visibleFalse}>
          <button type="button" onClick={handleBack}>
            <FiArrowLeft size={24}/>
          </button>
        </Back>

        <InputGroup visibleValue={visibleFalse}>

          <Input name="entity" value={entity} disabled="disabled" />
          <Input name="name" placeholder="Nome da empresa" maxLength="50" />
          <Input name="email" type="email" placeholder="E-mail" maxLength="50" />
          <Input name="password" type="password" placeholder="Senha secreta" maxLength="32" />

          <div className="input-group">
            <Input 
              name="latitude" 
              type="number"
              placeholder="Latitude" 
              value={latitude} 
              onChange={e => setLatitude(e.target.value)}
            />
            <Input 
              name="longitude"
              type="number" 
              placeholder="Longitude" 
              value={longitude} 
              onChange={e => setLongitude(e.target.value)}
            />
          </div>

          <Input name="site" placeholder="Rede social / Website" maxLength="32" />
          <Input 
            name="materials" 
            className="material" 
            placeholder="Materiais reciclados na empresa" 
            value={materials} 
            readOnly={true} 
            onClick={handleMaterial}
          />
          
          <div className="input-group">
            <Input 
              name="whatsapp" 
              type="number"
              placeholder="WhatsApp" 
              autoComplete="off" 
              onInput = {(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,11)
              }}
            />
            <Input 
              name="telephone" 
              type="number"
              placeholder="Telefone fixo" 
              autoComplete="off" 
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

          <button type="submit">Finalizar cadastro</button>
        </InputGroup>
          
        <Go visibleValue={visibleTrue}>
          <button type="button" disabled={goEnable} onClick={handleGo}>
            <FiArrowRight size={30}/>
          </button>
        </Go> 

        <Link to="/">Já tenho login</Link>
      </Form>   
    </>
  );
}
