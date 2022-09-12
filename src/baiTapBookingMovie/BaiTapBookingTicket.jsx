import React, { Component } from 'react';
import './BaiTapBookingTicket.css'
import HangGhe from './HangGhe';
import ThongTinDatGhe from './ThongTinDatGhe';
import danhSachGhe from './danhSachGhe.json'

export default class BaiTapBookingTicket extends Component {

  renderHangGhe = () => {
    return danhSachGhe.map((hangGhe, index) => {
      return <div key={index} className='ml-5'>

        <HangGhe hangGhe={hangGhe} soHangGhe={index}></HangGhe>

      </div>
    })
  }


  render() {
    return (
      <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundImage: "url('./images/bookingMovie/bgmovie.jpg')", backgroundSize: '100%' }}>
        <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6' }}>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-8 text-center'>
                <h1 className='text-warning mt-2' style={{ fontSize: '28px' }}>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
                <div className='mt-2 text-light' style={{ fontSize: '20px' }}>Màn hình</div>
                <div className='mt-2' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <div className='screen'></div>
                </div>
                {this.renderHangGhe()}
              </div>


              <div className='col-4'>
                <h1 style={{ fontSize: '30px' }} className='text-light mt-2'>DANH SÁCH GHẾ BẠN CHỌN</h1>
                <ThongTinDatGhe></ThongTinDatGhe>

              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}
