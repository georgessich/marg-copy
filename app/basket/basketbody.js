import React from 'react'

export default function BasketBody({products}) {
  return (
    <div>
        <table>
            <thead>
                <td>Товар</td>
                <td></td>
                <td>Цена</td>
                <td>Количество</td>
                <td>Итого</td>
                <td></td>
            </thead>
            <tbody>
                {products.map((item) => {
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                })}
            </tbody>
        </table>
        
    </div>
  )
}
