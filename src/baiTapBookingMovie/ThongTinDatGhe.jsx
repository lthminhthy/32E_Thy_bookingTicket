import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../store/actions/BaiTapDatVeAction'



class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <div className='mt-5'>
                    <button className='gheDuocChon mb-1'></button><span className='text-light' style={{ fontSize: '20px', fontWeight: '600' }}> Ghế đã đặt</span>
                    <br />
                    <button className='gheDangChon mb-1'></button><span className='text-light' style={{ fontSize: '20px', fontWeight: '600' }}> Ghế đang chọn</span>
                    <br />
                    <button className='ghe mb-1' style={{ marginLeft: '0' }}></button><span className='text-light' style={{ fontSize: '20px', fontWeight: '600' }}> Ghế chưa đặt</span>
                </div>

                <div>
                    <table class="table mt-2" border={2}>
                        <thead>
                            <tr style={{ fontSize: '20px' }} className='text-light'>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Hủy</th>
                            </tr>
                        </thead>
                        <tbody className='text-warning'>
                           
                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr style={{fontSize:'20px', fontWeight: '500'}} key={index} >
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia.toLocaleString()}</td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => {
                                            this.props.dispatch(huyGheAction(gheDangDat.soGhe))

                                        }}>Hủy</button>
                                    </td>
                                </tr>

                            })}
                        </tbody>
                        <tfoot>
                            <tr className='text-warning' style={{fontSize:'20px', fontWeight: '500'}} >
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=>{
                                    return tongTien += gheDangDat.gia;
                                },0).toLocaleString()}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>


        )
    }
}


const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
    }

}


export default connect(mapStateToProps)(ThongTinDatGhe)