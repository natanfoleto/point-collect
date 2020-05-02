import React, { useState } from 'react';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { SelectGroup, Select, Next, InputGroup, MaterialList, Scroll, Material, Trash } from './styles';
import { FiArrowRight, FiArrowLeft, FiTrash2 } from 'react-icons/fi';

import logo from '~/assets/logo.png';
import cooperativeImg from '~/assets/cooperative.png';
import tradeImg from '~/assets/trade.png';
import volunterImg from '~/assets/volunter.png';

let materialList = ['Plásticos', 'Garrafas', 'Tubos e canos', 'Brinquedos', 'Sacos', 'Isopor', 
'Alumínio', 'Papel', 'Papelão', 'Embalagens longa-vida', 'Vidros', 'Cerâmicas', 'Acrílico', 
'Lâmpadas', 'Pilhas', 'Movéis'];

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve conter mais de 6 digitos')
    .required('A senha é obrigatória'),
});

export default function SignUp() {

  const [entity, setEntity] = useState();
  const [materials, setMaterials] = useState("");

  const [entity1, setEntity1] = useState(false);
  const [entity2, setEntity2] = useState(false);
  const [entity3, setEntity3] = useState(false);
  
  const [visibleSelect, setVisibleSelect] = useState(false);
  const [visibleNext, setVisibleNext] = useState(false);
  const [visibleInput, setVisibleInput] = useState(true);
  const [visibleMaterial, setVisibleMaterial] = useState(false);
  const [visibleTrash, setVisibleTrash] = useState(false);

  const [nextEnable, setNextEnable] = useState("disabled");

  function handleSubmit(data) {
    
  }

  function handleSelect(op, entity) {
    setEntity(entity);

    switch (op) {
      case 1:
        setEntity1(true);
        setEntity2(false);
        setEntity3(false);
        break;
      case 2:
        setEntity2(true);
        setEntity1(false);
        setEntity3(false);
        break;
      case 3:
        setEntity3(true);
        setEntity2(false);
        setEntity1(false);
        break;
    
      default:
        break;
    }

    setNextEnable("");
  }

  function handleNext() {
    setVisibleNext(!visibleNext);
    setVisibleSelect(!visibleSelect);
    setVisibleInput(!visibleInput);
  }

  function handleBack() {
    setVisibleNext(!visibleNext);
    setVisibleSelect(!visibleSelect);
    setVisibleInput(!visibleInput);
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
      <img src={logo} alt="GoRecicle"/>

      <Form onSubmit={handleSubmit} schema={schema}>        

        <SelectGroup selectVisible={visibleSelect}>
          <h1>Selecione uma entidade</h1>

          <Select selected={entity1}>
            <button type="button" className="select" onClick={(e) => handleSelect(1, 'Cooperativa')} selected={true}>
              <img src={cooperativeImg} alt="Cooperativa"/>
              <div className="entity">
                <h1>Cooperativas</h1>
                <p>Iniciativas sociais que trabalham com a coleta e triagem de materiais recicláveis</p>
              </div>
            </button>
          </Select>

          <Select selected={entity2}>
            <button type="button" className="select" onClick={() => handleSelect(2, 'Comércio')}>
              <img src={tradeImg} alt="Comércio"/>
              <div className="entity">
                <h1>Comércios</h1>
                <p>Locais que compram embalagens longa vida (entre outros recicláveis) para envio à reciclagem</p>
              </div>
            </button>
          </Select>

          <Select selected={entity3}>
            <button type="button" className="select" onClick={() => handleSelect(3, 'PEV')}>
              <img src={volunterImg} alt="Voluntário"/>
              <div className="entity">
                <h1>Pontos de Entrega Voluntária</h1>
                <p>Locais que recebem embalagens longa vida (entre outros recicláveis) para envio à reciclagem</p>
              </div>
            </button>
          </Select>
        </SelectGroup>

        <InputGroup inputVisible={visibleInput}>
          <button type="button" className="button-back" onClick={handleBack}>
            <FiArrowLeft size={24}/>
          </button>
          
          <Input name="entity" value={entity} disabled="disabled" />
          <Input name="nome" placeholder="Nome da empresa" autoComplete="off"/>
          <Input name="email" type="email" placeholder="E-mail" autoComplete="off" />
          <Input name="password" type="password" placeholder="Senha secreta" autoComplete="off" />

          <div className="input-group">
            <Input name="latitude" placeholder="Latitude" autoComplete="off" />
            <Input name="longitude" placeholder="Longitude" autoComplete="off" />
          </div>

          <Input name="site" placeholder="Site" autoComplete="off" />
          <Input 
            name="material" 
            className="material" 
            value={materials} 
            readOnly={true} 
            placeholder="Materiais" 
            autoComplete="off"
            onClick={handleMaterial}
          />

          <MaterialList materialVisible={visibleMaterial}>
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
                <h1>Materiais escolhidos:</h1>
                <p>{materials}</p>

                <button type="button" className="button-trash" onClick={removeMaterialField}>
                  <p>Limpar lista de materiais!</p>
                  <FiTrash2 size={22} />
                </button>
              </Trash>
            </Scroll>
          </MaterialList>
          
          <div className="input-group">
            <InputMask name="telephone" mask="(99) 99999-9999" placeholder="Telefone" autoComplete="off" />
            <InputMask name="whatsapp" mask="(99) 99999-9999" placeholder="Whatsapp" autoComplete="off" />
          </div>

          <button type="submit">Finalizar cadastro</button>
        </InputGroup>
          
        <Next nextVisible={visibleNext}>
          <button type="button" disabled={nextEnable} onClick={handleNext}>
            <FiArrowRight size={30}/>
          </button>
        </Next> 

        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
