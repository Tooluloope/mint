import React from "react";
import { Link } from "react-router-dom";

export const Table = () => {
	return (
		<div class="flex flex-col mt-8">
			<div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
				<div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
					<table class="min-w-full">
						<thead>
							<tr>
								<th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
									Item Type
								</th>
								<th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
									Price
								</th>
								<th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
									Transaction No
								</th>
								<th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
									Time
								</th>
								<th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
							</tr>
						</thead>

						<tbody class="bg-white">
							<tr>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="flex items-center">
										<div class="flex-shrink-0 h-10 w-10">
											<img
												class="h-10 w-10 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</div>

										<div class="ml-4">
											<div class="text-sm leading-5 font-medium text-gray-900">
												Apple Mac Book 15” 250 SSD 12GB
											</div>
										</div>
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-gray-900">$73430</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 font-medium text-gray-900">
										1234567890
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
									12:30
								</td>

								<td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
									<Link to="#" class="text-indigo-600 hover:text-indigo-900">
										Edit
									</Link>
								</td>
							</tr>
							<tr>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="flex items-center">
										<div class="flex-shrink-0 h-10 w-10">
											<img
												class="h-10 w-10 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</div>

										<div class="ml-4">
											<div class="text-sm leading-5 font-medium text-gray-900">
												Apple Mac Book 15” 250 SSD 12GB
											</div>
										</div>
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-gray-900">$73430</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 font-medium text-gray-900">
										1234567890
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
									12:30
								</td>

								<td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
									<Link to="#" class="text-indigo-600 hover:text-indigo-900">
										Edit
									</Link>
								</td>
							</tr>
							<tr>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="flex items-center">
										<div class="flex-shrink-0 h-10 w-10">
											<img
												class="h-10 w-10 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</div>

										<div class="ml-4">
											<div class="text-sm leading-5 font-medium text-gray-900">
												Apple Mac Book 15” 250 SSD 12GB
											</div>
										</div>
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-gray-900">$73430</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 font-medium text-gray-900">
										1234567890
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
									12:30
								</td>

								<td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
									<Link to="#" class="text-indigo-600 hover:text-indigo-900">
										Edit
									</Link>
								</td>
							</tr>
							<tr>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="flex items-center">
										<div class="flex-shrink-0 h-10 w-10">
											<img
												class="h-10 w-10 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</div>

										<div class="ml-4">
											<div class="text-sm leading-5 font-medium text-gray-900">
												Apple Mac Book 15” 250 SSD 12GB
											</div>
										</div>
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-gray-900">$73430</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 font-medium text-gray-900">
										1234567890
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
									12:30
								</td>

								<td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
									<Link to="#" class="text-indigo-600 hover:text-indigo-900">
										Edit
									</Link>
								</td>
							</tr>
							<tr>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="flex items-center">
										<div class="flex-shrink-0 h-10 w-10">
											<img
												class="h-10 w-10 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</div>

										<div class="ml-4">
											<div class="text-sm leading-5 font-medium text-gray-900">
												Apple Mac Book 15” 250 SSD 12GB
											</div>
										</div>
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-gray-900">$73430</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 font-medium text-gray-900">
										1234567890
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
									12:30
								</td>

								<td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
									<Link to="#" class="text-indigo-600 hover:text-indigo-900">
										Edit
									</Link>
								</td>
							</tr>
							<tr>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="flex items-center">
										<div class="flex-shrink-0 h-10 w-10">
											<img
												class="h-10 w-10 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</div>

										<div class="ml-4">
											<div class="text-sm leading-5 font-medium text-gray-900">
												Apple Mac Book 15” 250 SSD 12GB
											</div>
										</div>
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-gray-900">$73430</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 font-medium text-gray-900">
										1234567890
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
									12:30
								</td>

								<td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
									<Link to="#" class="text-indigo-600 hover:text-indigo-900">
										Edit
									</Link>
								</td>
							</tr>
							<tr>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="flex items-center">
										<div class="flex-shrink-0 h-10 w-10">
											<img
												class="h-10 w-10 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</div>

										<div class="ml-4">
											<div class="text-sm leading-5 font-medium text-gray-900">
												Apple Mac Book 15” 250 SSD 12GB
											</div>
										</div>
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-gray-900">$73430</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 font-medium text-gray-900">
										1234567890
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
									12:30
								</td>

								<td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
									<Link to="#" class="text-indigo-600 hover:text-indigo-900">
										Edit
									</Link>
								</td>
							</tr>
							<tr>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="flex items-center">
										<div class="flex-shrink-0 h-10 w-10">
											<img
												class="h-10 w-10 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</div>

										<div class="ml-4">
											<div class="text-sm leading-5 font-medium text-gray-900">
												Apple Mac Book 15” 250 SSD 12GB
											</div>
										</div>
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-gray-900">$73430</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 font-medium text-gray-900">
										1234567890
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
									12:30
								</td>

								<td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
									<Link to="#" class="text-indigo-600 hover:text-indigo-900">
										Edit
									</Link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
