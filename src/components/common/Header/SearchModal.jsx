'use client'
import { useState } from 'react'
import { Modal } from 'antd'
import { FiSearch } from 'react-icons/fi'

const SearchModal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const showModal = () => setIsModalOpen(true)
	const handleCancel = () => setIsModalOpen(false)

	return (
		<>
			{/* Search icon */}
			<FiSearch
				className='text-white text-2xl xl:text-4xl cursor-pointer hover:text-yellow-400 transition duration-200'
				onClick={showModal}
			/>

			{/* Modal */}
			<Modal
				open={isModalOpen}
				onCancel={handleCancel}
				footer={null}
				closable={true}
				title={
					<h2 className='text-white text-lg md:text-xl font-semibold'>
						Film nomini yozing
					</h2>
				}
				className='custom-ant-modal'
			>
				<input
					type='text'
					placeholder='Izlash'
					className='w-full bg-neutral-900 text-white  border border-neutral-700 focus:ring-yellow-400 focus:border-yellow-400 rounded-md py-2 px-3 text-base'
				/>
			</Modal>
		</>
	)
}

export default SearchModal
