export default function chatItem() {
  return (
    <>
      {/* 팀채팅 */}
      <li className="mt-5 flex justify-between px-4 py-2">
        <div className="flex -space-x-4 rtl:space-x-reverse">
          {/* 임시 프로필 이미지 dummy */}
          <div className="mb-2 h-8 w-8 rounded-full bg-black">
            <p> </p>
          </div>
          <div className="mb-2 h-8 w-8 rounded-full bg-gray-600">
            <p> </p>
          </div>
          <a
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-700 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800"
            href="#"
          >
            +2
          </a>
        </div>
        <div>
          <h5 className="font-bold">팀 채팅</h5>
          <p className="max-w-56 truncate text-sm">
            안녕하세요,, 저는 내일 병원에 다녀와야 될 것 같아서 부득이하게
            팔로업 불참할 것 같은데 혹시 다음 팔로업에 꼭 참여하겠습니다
          </p>
        </div>
        <div className="flex flex-col items-end justify-between">
          <p className="text-xs text-meetie-gray-40">오후 6:40</p>
          <span className="rounded-md bg-primary px-2 py-1 text-xs text-white">
            12
          </span>
        </div>
      </li>
      {/* 일반 채팅 */}
      <li className="mt-5 flex justify-between px-4 py-2">
        {/* 임시 프로필 이미지 dummy */}
        <div className="mb-2 h-10 w-10 rounded-full bg-black">
          <p> </p>
        </div>
        {/* 채팅 이력 있을 경우 */}
        <div>
          <h5 className="font-bold">박가현</h5>
          <p className="text-sm">반가워요 ~ 😊 앞으로 잘 부탁드립니다 😊</p>
        </div>
        <div className="flex flex-col items-end justify-between">
          <p className="text-xs text-meetie-gray-40">오후 6:40</p>
          <span className="rounded-md bg-primary px-2 py-1 text-xs text-white">
            1
          </span>
        </div>
      </li>
      <li className="mt-5 flex justify-start px-4 py-2">
        {/* 임시 프로필 이미지 dummy */}
        <div className="mb-2 h-10 w-10 rounded-full bg-black">
          <p> </p>
        </div>
        {/* 채팅 이력 없는 경우 */}
        <div className="ml-2">
          <h5 className="font-bold">루시</h5>
          <p className="text-sm text-meetie-gray-40">대화를 시작해보세요!</p>
        </div>
      </li>
    </>
  )
}