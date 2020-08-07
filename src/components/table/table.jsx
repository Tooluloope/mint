import React from "react";

export const Table = () => {
	return (
		<div class="flex flex-col mt-8">
			<div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
				<div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
					<table class="min-w-full">
						<thead>
							<tr>
								<th class="px-6 py-3 border-b border-gray-200  bg-table text-left text-xs leading-4 font-medium capitalize tracking-wider">
									Item Type
								</th>
								<th class="px-6 py-3 border-b border-gray-200  bg-table text-left text-xs leading-4 font-medium capitalize tracking-wider">
									Price
								</th>
								<th class="px-6 py-3 border-b border-gray-200  bg-table text-left text-xs leading-4 font-medium capitalize tracking-wider">
									Transaction No
								</th>
								<th class="px-6 py-3 border-b border-gray-200  bg-table text-left text-xs leading-4 font-medium capitalize tracking-wider">
									Time
								</th>
								<th class="px-6 py-3 border-b border-gray-200  bg-table"></th>
							</tr>
						</thead>

						<tbody class="bg-white">
							<tr>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="flex items-center">
										<div class="flex-shrink-0 h-10 w-10">
											<p
												style={{ background: "#7F8FA4" }}
												class="h-10 w-10 rounded-full text-white bg text-center flex items-center justify-center"
											>
												VW
											</p>
										</div>

										<div class="ml-4">
											<div class="text-sm leading-5 font-medium text-table-color">
												Apple Mac Book 15” 250 SSD 12GB
											</div>
										</div>
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-chart">$73430</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 font-medium text-chart">
										1234567890
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-chart">
									12:30
								</td>

								<td class="mx-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium flex items-center justify-between relative ">
									<button
										to="#"
										class=" text-green-color px-8 py-2 border rounded-full mr-6"
									>
										<span className="w-2 h-2 bg-green-500 rounded-full absolute  table-button"></span>
										Reconciled
									</button>

									<i class="fas fa-angle-down text-chart"></i>
								</td>
							</tr>
							<tr>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="flex items-center">
										<div class="flex-shrink-0 h-10 w-10">
											<p
												style={{ background: "#7F8FA4" }}
												class="h-10 w-10 rounded-full text-white bg text-center flex items-center justify-center"
											>
												VW
											</p>
										</div>

										<div class="ml-4">
											<div class="text-sm leading-5 font-medium text-table-color">
												Apple Mac Book 15” 250 SSD 12GB
											</div>
										</div>
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-chart">$73430</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 font-medium text-chart">
										1234567890
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-chart">
									12:30
								</td>

								<td class="mx-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium flex items-center justify-between relative ">
									<button
										to="#"
										class=" text-yellow-color px-10 py-2 border rounded-full mr-6"
									>
										<span className="w-2 h-2 bg-yellow-500 rounded-full absolute  table-button"></span>
										Pending
									</button>

									<i class="fas fa-angle-down text-chart"></i>
								</td>
							</tr>
							<tr>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="flex items-center">
										<div class="flex-shrink-0 h-10 w-10">
											<p
												style={{ background: "#7F8FA4" }}
												class="h-10 w-10 rounded-full text-white bg text-center flex items-center justify-center"
											>
												VW
											</p>
										</div>

										<div class="ml-4">
											<div class="text-sm leading-5 font-medium text-table-color">
												Apple Mac Book 15” 250 SSD 12GB
											</div>
										</div>
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-chart">$73430</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 font-medium text-chart">
										1234567890
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-chart">
									12:30
								</td>

								<td class="mx-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium flex items-center justify-between relative ">
									<button
										to="#"
										class=" text-green-color px-8 py-2 border rounded-full mr-6"
									>
										<span className="w-2 h-2 bg-green-500 rounded-full absolute  table-button"></span>
										Reconciled
									</button>

									<i class="fas fa-angle-down text-chart"></i>
								</td>
							</tr>
							<tr>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="flex items-center">
										<div class="flex-shrink-0 h-10 w-10">
											<p
												style={{ background: "#7F8FA4" }}
												class="h-10 w-10 rounded-full text-white bg text-center flex items-center justify-center"
											>
												VW
											</p>
										</div>

										<div class="ml-4">
											<div class="text-sm leading-5 font-medium text-table-color">
												Apple Mac Book 15” 250 SSD 12GB
											</div>
										</div>
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-chart">$73430</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 font-medium text-chart">
										1234567890
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-chart">
									12:30
								</td>

								<td class="mx-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium flex items-center justify-between relative ">
									<button
										to="#"
										class=" text-green-color px-8 py-2 border rounded-full mr-6"
									>
										<span className="w-2 h-2 bg-green-500 rounded-full absolute  table-button"></span>
										Reconciled
									</button>

									<i class="fas fa-angle-down text-chart"></i>
								</td>
							</tr>
							<tr>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="flex items-center">
										<div class="flex-shrink-0 h-10 w-10">
											<p
												style={{ background: "#7F8FA4" }}
												class="h-10 w-10 rounded-full text-white bg text-center flex items-center justify-center"
											>
												VW
											</p>
										</div>

										<div class="ml-4">
											<div class="text-sm leading-5 font-medium text-table-color">
												Apple Mac Book 15” 250 SSD 12GB
											</div>
										</div>
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-chart">$73430</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 font-medium text-chart">
										1234567890
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-chart">
									12:30
								</td>

								<td class="mx-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium flex items-center justify-between relative ">
									<button
										to="#"
										class=" text-yellow-color px-10 py-2 border rounded-full mr-6"
									>
										<span className="w-2 h-2 bg-yellow-500 rounded-full absolute  table-button"></span>
										Pending
									</button>

									<i class="fas fa-angle-down text-chart"></i>
								</td>
							</tr>
							<tr>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="flex items-center">
										<div class="flex-shrink-0 h-10 w-10">
											<p
												style={{ background: "#7F8FA4" }}
												class="h-10 w-10 rounded-full text-white bg text-center flex items-center justify-center"
											>
												VW
											</p>
										</div>

										<div class="ml-4">
											<div class="text-sm leading-5 font-medium text-table-color">
												Apple Mac Book 15” 250 SSD 12GB
											</div>
										</div>
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-chart">$73430</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 font-medium text-chart">
										1234567890
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-chart">
									12:30
								</td>

								<td class="mx-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium flex items-center justify-between relative ">
									<button
										to="#"
										class=" text-green-color px-8 py-2 border rounded-full mr-6"
									>
										<span className="w-2 h-2 bg-green-500 rounded-full absolute  table-button"></span>
										Reconciled
									</button>

									<i class="fas fa-angle-down text-chart"></i>
								</td>
							</tr>
							<tr>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="flex items-center">
										<div class="flex-shrink-0 h-10 w-10">
											<p
												style={{ background: "#7F8FA4" }}
												class="h-10 w-10 rounded-full text-white bg text-center flex items-center justify-center"
											>
												VW
											</p>
										</div>

										<div class="ml-4">
											<div class="text-sm leading-5 font-medium text-table-color">
												Apple Mac Book 15” 250 SSD 12GB
											</div>
										</div>
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-chart">$73430</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 font-medium text-chart">
										1234567890
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-chart">
									12:30
								</td>

								<td class="mx-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium flex items-center justify-between relative ">
									<button
										to="#"
										class=" text-chart px-6 py-2 border rounded-full mr-6"
									>
										<span className="w-2 h-2 bg-gray-500 rounded-full absolute  table-button"></span>
										Un-reconciled
									</button>

									<i class="fas fa-angle-down text-chart"></i>
								</td>
							</tr>
							<tr>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="flex items-center">
										<div class="flex-shrink-0 h-10 w-10">
											<p
												style={{ background: "#7F8FA4" }}
												class="h-10 w-10 rounded-full text-white bg text-center flex items-center justify-center"
											>
												VW
											</p>
										</div>

										<div class="ml-4">
											<div class="text-sm leading-5 font-medium text-table-color">
												Apple Mac Book 15” 250 SSD 12GB
											</div>
										</div>
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-chart">$73430</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 font-medium text-chart">
										1234567890
									</div>
								</td>

								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-chart">
									12:30
								</td>

								<td class="mx-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium flex items-center justify-between relative ">
									<button
										to="#"
										class=" text-green-color px-8 py-2 border rounded-full mr-6"
									>
										<span className="w-2 h-2 bg-green-500 rounded-full absolute  table-button"></span>
										Reconciled
									</button>

									<i class="fas fa-angle-down text-chart"></i>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
