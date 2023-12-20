import { FC, useRef, useState } from 'react'
import { Folder } from '../Icons'
import Button from '@/common/elements/Button'

interface FileUploadProps {
  fileUpload: (file: FileList) => void
  getDocsCounts: (files: any) => void
}

const fileTypes = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'text/plain',
]
const FileUpload: FC<FileUploadProps> = ({ fileUpload, getDocsCounts }) => {
  const [files, setFiles] = useState<any>([])
  const [dragActive, setDragActive] = useState<boolean>(false)
  const inputRef = useRef<any>(null)

  const handleChange = (e: any) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      for (let i = 0; i < e.target.files['length']; i++) {
        if (fileTypes.indexOf(e.target.files[i].type) < 0) {
          alert('Please check file extension')
          continue
        }
        setFiles((prevState: any) => [...prevState, e.target.files[i]])
      }
    }
  }

  const handleDrop = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      for (let i = 0; i < e.dataTransfer.files['length']; i++) {
        setFiles((prevState: any) => [...prevState, e.dataTransfer.files[i]])
      }
    }
  }

  const handleDragLeave = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
  }

  const handleDragOver = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(true)
  }

  const handleDragEnter = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(true)
  }

  const removeFile = (idx: any) => {
    const newArr = [...files]
    newArr.splice(idx, 1)
    setFiles([])
    setFiles(newArr)
  }

  const openFileExplorer = () => {
    inputRef.current.value = ''
    inputRef.current.click()
  }

  const handleSubmitFile = async (e: any) => {
    getDocsCounts(files)
    // const uploadPromises = files.map((file: File) => fileUpload(file))
    const uploadPromises = fileUpload(files)

    try {
      // await Promise.all(uploadPromises)
      setFiles([])
    } catch (error) {}
  }

  return (
    <div
      className={`${
        dragActive ? 'bg-neon-100 opacity-70' : ''
      } w-full py-9 px-10 flex flex-col rounded-xl justify-center items-center gradient-box max-sm:px-3 max-sm:py-5`}
    >
      <form
        className="flex flex-col items-center w-full z-[10]"
        onDragEnter={handleDragEnter}
        onSubmit={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
      >
        <Folder />
        <input
          placeholder="fileInput"
          className="hidden"
          ref={inputRef}
          type="file"
          multiple={true}
          onChange={handleChange}
          accept=".csv, .txt, .pdf, .xlsx"
        />
        <div className="flex flex-col items-center w-full gap-4">
          <div
            className="flex flex-col items-center hover:cursor-pointer"
            onClick={openFileExplorer}
          >
            <span className="mt-4 text-sm font-medium text-white">
              Drop files here or click to select files
            </span>
            <span className="mt-4 text-sm font-normal text-gray-500">
              Supported file types: csv, text, pdf, xlsx
            </span>
          </div>
          {files.length > 0 && (
            <div className="flex flex-row items-center justify-between w-full gap-16 mt-4 max-xl:gap-4">
              <div className="flex flex-col justify-center w-full gap-4">
                {files.map((file: any, idx: number) => (
                  <div
                    className="flex flex-row items-center justify-between w-full"
                    key={idx}
                  >
                    <span className="text-base font-semibold text-white max-sm:text-xs">
                      {file.name}
                    </span>
                    <span
                      className="text-base font-medium text-gray-500 cursor-pointer"
                      onClick={() => removeFile(idx)}
                    >
                      Decline
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {files.length > 0 && (
            <Button
              text={'Upload'}
              variant={'gradient'}
              onClick={handleSubmitFile}
            />
          )}
        </div>
      </form>
    </div>
  )
}

export default FileUpload
