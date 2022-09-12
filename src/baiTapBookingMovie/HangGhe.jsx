import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux';
import { datGheAction } from '../store/actions/BaiTapDatVeAction';

class HangGhe extends Component {
  renderGhe = () => {


    return this.props.hangGhe.danhSachGhe.map((ghe,index) => {

     

      let cssGheDaDat = '';
      let disabled = false;

      // ghees ddax bij ng khac dat
      if(ghe.daDat){
        cssGheDaDat = 'gheDuocChon';
        disabled= true;
      }

      // ghe dang dat
      let cssGheDangDat = '';
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe=== ghe.soGhe);
      if(indexGheDangDat !== -1){
        cssGheDangDat = 'gheDangChon'
      }


      return <button onClick={() => {
        this.props.datGhe(ghe)
      }} 
      disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
        {index+1}
      </button>

    })
  }


  rendersoHang =() => {
    return this.props.hangGhe.danhSachGhe.map((hang, index)=> {
        return <button className='rowNumber'>
          {hang.soGhe}
        </button>
      })
   
  }

  renderHangGhe = () => {
    if(this.props.soHangGhe === 0){
      return <div className='ml-3'>
       {this.props.hangGhe.hang} {this.rendersoHang()}
      </div>
      
    }else{
       return <Fragment>
       {this.props.hangGhe.hang}
        {this.renderGhe()}
    </Fragment>
    }


   
  }


  render() {
    return (
      <div className='text-light text-left ml-5 mt-2' style={{fontSize:'20px'}}>
       {this.renderHangGhe()}
        </div>
    )
  }
}


const mapStateToProps = state => {
  return{
    danhSachGheDangDat : state.BaiTapDatVeReducer.danhSachGheDangDat
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe))
    }
  }
}





export default connect(mapStateToProps,mapDispatchToProps)(HangGhe)
